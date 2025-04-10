import FormTextArea from "../components/FormTextArea";
import FormInput from "../components/FormInput";
import { useFireStore } from "../hooks/useFireStore";
import { useState } from "react";
function Create() {
  const {addDocument} = useFireStore("recepies");
  const [ingredients, setIngredients] = useState([])

  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement)
    const ingredient = formData.get("ingredient");
    
    if (!ingredients.includes(ingredient)){
      setIngredients((prev)=>{
        return [...prev,ingredient]
      })
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)

    const title = formData.get("title")
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description")
    addDocument({title,cookingTime: `${cookingTime} minutes`,description,ingredients});
    
  }
  return <div className="px-10">
    <form onSubmit={handleSubmit}>
      <h2>Create new Recepies</h2>
      <FormInput name="title" label="Title" type="text"/>
      <FormInput name="cookingTime" label="Cooking time" type="text"/>
      <div className="flex flex-col">
      <FormInput name="ingredient" label="Ingredients" type="text"/>
      <button onClick={addIngredient} className="btn btn-primary ml-auto" type="button">Add</button><p className="mb-5">Ingredients : {"  "} {ingredients.map((i)=>{
          return <i key={i}>{i},</i>
        })} </p>
      </div>
      <FormTextArea name="description" label="description"/>
      <div className="mt-5 flex justify-end">
        <button className="btn btn-primary ">Add</button>
        
      </div>
    </form>
  </div>;
}

export default Create;
