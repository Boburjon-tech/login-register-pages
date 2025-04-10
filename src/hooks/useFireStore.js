import { collection,updateDoc,doc,addDoc,deleteDoc,setDoc } from "firebase/firestore";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase/config";


const initialState = {
    isPending : false,
    error : null,
    success : true,
    data : null
}

const reducer = (state,action)=>{
    const {type,payload} = action;
    switch (type) {
        case "IS_PENDING":
            return {isPending:true,error:null,succes:true,data:null}

        case "ERROR":
            return {isPending:false,error:true,succes:false,data:null}

        case "ERROR":
            return {isPending:false,error:false,succes:true,data:payload}
    
        default:
            return state;
    }
}

export const useFireStore = (c)=>{
    const [isCanceled,setIsCanceled] = useState(false);
    const [state,dispatch] = useReducer(reducer,initialState);

    const checkCanceled = (action)=>{
        if(!isCanceled) {
            dispatch(action);
        }
    }

    const addDocument = async (data)=>{
        try {
            checkCanceled({type: "IS_PENDING",payload:true});
            const res  =await addDoc(collection(db,c),data);
            checkCanceled({type:"SUCCESS",payload : res});
            toast.success("Success");
        } catch (error) {
            checkCanceled({type:"ERROR",payload:error.message});
            toast.error(error.message);
            console.log(error.message)
        }finally {
            checkCanceled({type:"IS_PENDING",payload : false});
        }
    }

    const updateDocument = async (id,data)=>{
        const ref = doc(db,c,id);
        try {
            checkCanceled({type: "IS_PENDING",payload:true});
            const res = await updateDoc(ref,data);
            toast.success("Success");
            checkCanceled({type : "SUCCESS",payload : res})
        } catch (error) {
            checkCanceled({type:"ERROR",payload:error.message});
            toast.error(error.message);
            console.log(error.message)
        }finally {
            checkCanceled({type:"IS_PENDING",payload : false});
        }
    }

    const deleteDocument = async (id)=>{
        try {
            checkCanceled({type: "IS_PENDING",payload:true});
            await deleteDoc(doc(db, c, id));
            toast.success("Success");
        } catch (error) {
            checkCanceled({type:"ERROR",payload:error.message});
            toast.error(error.message);
            console.log(error.message)
        }finally {
            checkCanceled({type:"IS_PENDING",payload : false});
        }
    }

    useEffect(()=>{
        return () => setIsCanceled(true);
    },[]);

    return {...state,updateDocument,addDocument,deleteDocument}

}