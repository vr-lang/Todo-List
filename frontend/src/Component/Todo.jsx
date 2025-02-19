import React, { useState } from 'react';


const Todo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const[data,setdata]=useState([])

  async function addTask() {
    if (!title.trim() || !description.trim()) return;

    let newTask = { title, description };

    let res = await fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    let data=await res.json()
    console.log(data)
    setdata(data)
    setTitle("")
    setDescription("")
  }

  return (


    <div className="flex h-screen bg-[#FBFBFB]">

      
      {/* Form Section */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="p-6 rounded-lg shadow-2xl w-3/4 bg-[#E8F9FF]">
          <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
          <div className="flex flex-col gap-3">
            <input
              
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded w-full h-20"
            />
            <button 
            onClick={addTask}
  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group w-[100%]"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white ml-[200px]"
    >Add Task</span>
</button>
          </div>
        </div>
      </div>

      {/* Todo List Section */}
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">Todos</h2>
        <ul className="space-y-2">
          {data.map((items, index) => (
            <li key={index} className="p-3 rounded shadow-2xl bg-[#E8F9FF] flex justify-between">
              
              <div>
              <h3 className="font-semibold text-xl">{items.title}</h3>
              <p>{items.description}</p>

              </div>

              <button 
            
  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group w-[120px] ml-[320px] h-[45px] mt-[5px]"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white "
    >Edit</span>
</button>


              <button 

              onClick={() =>{
                async function deletedata() {

                  let res = await fetch(`http://localhost:8080/delete/${items.ID}`,{
                    method:"DELETE"

                  })
                  

                  let data=await res.json()
                  setdata(data)
                  console.log(data)
                }

                deletedata()

              }}
            
  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-md group w-[175px]"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white ml-[25px] "
    >Completed</span>
</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
