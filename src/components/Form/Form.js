import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
  const [data, setData] = useState({
    title: "",
    portion: 0,
    time: 0,
    tags: [],
    ingredients: [],
    steps: [],
    image:""
  });
  const [preview, setPreview] = useState("");
  const navigate = useNavigate()
  function onSubmit(){
    try{
        if(data.title === ""||data.portion===0||data.time===0){
            alert('Please Fill Required Field')
        }else{
            const token = sessionStorage.getItem('token')
            const formData = new FormData();
            formData.append("title",data.title);
            formData.append("portion",data.portion);
            formData.append("time",data.time);
            formData.append("tags",data.tags);
            formData.append("ingredients",data.ingredients);
            formData.append("steps",data.steps);
            formData.append("file",data.image)
            console.log(typeof formData.get("steps"))
            axios.put("http://localhost:4000/post/create",formData,{headers:{Authorization:token}})
            .then(res=>{
                alert("Post Berhasil")
                navigate("/")
                console.log(res)
            }).catch(err=>{
                alert("Post Gagal")
            })
        }
    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
    <div className="bg-gray-200 p-4">
        <h1 className="text-3xl font-bold text-center">
          Post Your Recipe
        </h1>
      <div className=" grid grid-cols-3 grid-rows-6 gap-4 h-screen">
        
        <div className="col-span-3">
          <span className="font-semibold">Title</span>
          <input
            placeholder="Your Recipe Title (required)"
            className="block w-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            type="text"
            onChange={(value) => {
              setData({ ...data, title: value.target.value });
            }}
          />
        </div>
        <div className="">
          <span className="font-semibold">Portion</span>
          <input
            placeholder="... People (required)"
            className="block w-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            type="number"
            onChange={(value) => {
              setData({ ...data, portion: value.target.value });
            }}
          />
        </div>
        <div className="">
          <span className="font-semibold">Time</span>
          <input
            placeholder="... Minute(s) (required)"
            className="block w-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            type="number"
            onChange={(value) => {
              setData({ ...data, time: value.target.value });
            }}
          />
        </div>
        <div className="">
          <span className="font-semibold">Tags</span>
          <input
            placeholder="Seperate with coma"
            className="block w-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            type="text"
            onChange={(e)=>{
                const value = e.target.value.toLowerCase()
                setData({...data,tags:value})
            }}
          />
        </div>
        <div className="row-span-2">
          <span className="font-semibold">Ingredients</span>
          <textarea
            placeholder="Seperate with coma ex:900gr of Sugar,100gr Tomato"
            className="block w-full h-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            onChange={(e)=>{
                const value = e.target.value
                setData({...data,ingredients:value})
            }}
          ></textarea>
        </div>
        <div className="row-span-2">
          <span className="font-semibold">Steps</span>
          <textarea
            placeholder="Seperate with coma ex:900gr of Sugar,100gr Tomato"
            className="block w-full h-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            onChange={(e)=>{
                const value = e.target.value
                setData({...data,steps:value})
            }}
          ></textarea>
        </div>
        <div id="preview" className="row-span-2">
          <span className="font-semibold">Preview</span>
          {preview ? <img className="w-full h-full" src={preview} /> : ""}
        </div>
        <div className="col-span-3 mt-2">
          <span className="font-semibold">Your Food Pic</span>
          <input
            placeholder="Your Food Pic"
            className="block w-full rounded-md bg-transparent focus:ring-0 focus:outline-none"
            type="file"
            onChange={(value) => {
              const file = value.target?.files[0];
            setData({ ...data, image:file });
              setPreview(URL.createObjectURL(value.target.files[0]));

            }}
          />
        </div>
        <button className="hover:bg-black hover:text-gray-200 transition duration-300 ease-out col-span-3 border-black border-2 h-1/2 w-full bg-transparent rounded-lg font-semibold"onClick={()=>onSubmit()}>SUBMIT</button>
      </div>
      
      </div>
    </>
  );
}
export default Form;
