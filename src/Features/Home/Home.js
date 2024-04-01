import React, { useEffect, useRef } from 'react'

const Home = () => {


  const tar = useRef(null);
  const inp = useRef(null);

  const goDown = () => {
    tar.current.scrollIntoView({ behavior: 'smooth' })
    //on btn click this function will navigate to the given target box "bx7" , bx7 have been given {ref(tar)}  so when click it goes to the tar target
  }
  const onInp = () => {
    console.log(inp);

  }
  return (
    <div>
      <input ref={onInp} type="text" placeholder='text' />
      <button onClick={goDown} className='p-4 bg-green-400'>Go to bx 5</button>


      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx2">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx3">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx5" ref={tar} >
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
    </div>
  )
}

export default Home