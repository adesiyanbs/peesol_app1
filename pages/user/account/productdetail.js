import React from 'react'

const productdetail = () => {
    const products = [

        {
          id: 1,
          name: "AE",
          description: "Lorem plenty words go here",
          img: "/AE.jpg",
          price: 100
        },
      
        {
          id: 2,
          name: "iCell",
          description: "Lorem plenty words go here",
          img: "/icell.jpg",
          price: 100
        },
      
      
        {
          id: 3,
          name: "Mulitu Power",
          description: "Lorem plenty words go here",
          img: "/mulitu-power1.jpg",
          price: 100
        },
      
        {
          id: 4,
          name: "Outback Inverter",
          description: "Lorem plenty words go here",
          img: "/outback-inverter.jpg",
          price: 100
        },
      
      
        {
          id: 5,
          name: "Outback Inverter",
          description: "Lorem plenty words go here",
          img: "/outback2.jpg",
          price: 100
        },
    
        {
          id: 6,
          name: "XW3",
          description: "Lorem plenty words go here",
          img: "/XW3.png",
          price: 100
        },
    
        {
          id: 7,
          name: "Sukam2",
          description: "Lorem plenty words go here",
          img: "/sukam2.jpg",
          price: 100
        },
    
        {
          id: 8,
          name: "TBB",
          description: "Lorem plenty words go here",
          img: "/tbb2.jpg",
          price: 100
        },
    
        {
          id: 9,
          name: "XW3-2",
          description: "Orange are orange",
          img: "/XW3.png",
          price: 100
        }
      
      ];

      function showStuff(e){
          e.preventDefault()
          localStorage.setItem(
              "products",
              JSON.stringify(id, name)
          );
          console.log("stored")
          console.log(localStorage.getItem("products"));
      }
    return (
        <div>
            <button onClick={showStuff}>click</button>
        </div>
    )
}

export default productdetail
