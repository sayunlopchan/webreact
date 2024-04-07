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
      <button onClick={goDown} className='p-4 bg-green-400'>Go to bx 50</button>


      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx2">
        <h1>Box2</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx3">
        <h1>Box3</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box4</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box5</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box6</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box7</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box8</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box9</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box10</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box11</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box12</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box13</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box14</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box15</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box16</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box17</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box18</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box19</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box20</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box21</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box22</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box23</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box24</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box25</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box26</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box27</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box28</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box29</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box30</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box31</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box32</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box33</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box34</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box35</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box36</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box37</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box38</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box39</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box40</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box41</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box42</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box43</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box44</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box45</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box46</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box47</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4">
        <h1>Box48</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
      <div className="bx4" ref={tar}>
        <h1>Box50</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto neque. Nam quaerat laborum, incidunt alias quam atque sapiente dolore fuga asperiores repudiandae rerum cumque pariatur magni vitae tempore! Temporibus?</p>
      </div>
    </div>
  )
}

export default Home