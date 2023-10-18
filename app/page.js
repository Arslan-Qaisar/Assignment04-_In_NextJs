import React from 'react'

export default function page() {
  return (
    <>
    <div>
    <nav className={'flex justify-between p-3 font-semibold'}>
  <h2 className={'font-serif font-thin text-xl'}>NORDIC ROSE</h2>
  <div className='hidden sm:flex '>
  <ul className={'flex space-x-5 justify-end mr-5 hide-on-small'} id='Nav'>
    <li>BLOG</li>
    <li>ABOUT</li>
    <li>LINKS</li>
    <li>PROJECTS</li>
  </ul>
  </div>
</nav>


    <hr /><hr />
    </div>
    
    {/* // /* <!-- main body --> */}
    <p className={'text-center pt-6 text-4xl font-extrabold font-serif'}>A few words about this blog <br /> platform, Ghost, and how this <br /> site was made</p>
    <p className={'text-center italic pt-2'}>Why Ghost (& Figma) instead of Medium, WordPress <br /> or other options?</p>
    <img style={{height:550}} className='pt-10   w-full' src='https://wallpaperaccess.com/full/6259363.jpg' alt='image not found' />
    <hr />
  
    <div className={'md:pr-56 md:pl-56'}>
    <div className={'flex justify-between'}>
    <span className={'flex'}>
    <img className={'p-5 rounded-full h-36 w-36'} src='https://i.pinimg.com/736x/25/76/5f/25765fb914ec4e6bac0f855945daa3de.jpg' alt='image not found' />
    <p className={'pt-10 font-semibold'}>Mika MAtikainen <br /> Apr 15, 2020 · 4 min read</p>
    </span>
    <span className={'flex justify-end pt-12 mr-5 space-x-3 '}>
    <img className={'rounded-full h-10 w-9' }src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png' alt='image not found' />
    <img className={'rounded-full h-10 w-9'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-UY_eZESxCvgGEbDonrEnXC_O6tShGsDEmvqT1DznkMiBXi3qh3IX2eti0pI4NBspTA&usqp=CAU' alt='image not found' />    
    </span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac
        habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
        <br /><br />
        className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>

    <p className={'pt-12 font-extrabold text-2xl'}>Next on the Story</p>

    <p className={'pt-5'}>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit  finibus. Aenean pharetra quis lacus at viverra. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br /> Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. <br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate corrupti, nulla veniam quidem fugit quaerat libero itaque tempora omnis?</p>
    <img  className={'pt-5 w-full h-96'} src='https://media.istockphoto.com/id/1304357935/photo/the-best-way-to-predict-the-future-is-to-create-it-motivational-quote-on-letter-board-cactus.jpg?s=612x612&w=0&k=20&c=kds0ryMiPKqFztDHlfZ5koJs_S60mCQBOcIJf1nJMkY=' alt='image not found' />
    <p className={'pt-3 font-semibold italic text-center'}>Image caption centered this way and Ill make this a bit longer to indicate the amount of line-height.</p>
    <p className={'pt-10'}>Aenean pharetra quis lacus at viverra. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos incepwers himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. Proin at  justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem  pellent id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>

    <p className={'pt-14 font-semibold'}>A list looks like this:</p>
    <ul className={'list-disc ml-8'}><br />
        <li>First item in the list</li><br />
        <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li><br />
        <li> Third item in the list className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</li><br />
    </ul>
    <p className={'pt-16 font-semibold'}>Thanks for reading, <br /> Mika</p>

    <div className={' mt-10 font-semibold'}>
        <div className={'flex justify-center'}>
            <span className={'flex p-3 ml-4 space-x-1 border border-black'}>
                <img src='https://logowik.com/content/uploads/images/facebook-round-black-icon4588.logowik.com.webp' alt='image not found' className='h-8 w-10' />
                <p>Share on Facebook</p>
            </span>
            <span className={'p-3 flex border-l border-black pl-4 border'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2G2tbJxztCiIP5Ti5hqpXGxbl8Yatcy1i1xWClttuA&s" alt='image not found' className='h-6 w-10' />
                <p>Share on Twitter</p>
            </span>
        </div>                
    </div>    

    <p className={'pt-4 font-semibold'}>Tags: <span className='underline'> product design, culture </span></p><br /><hr />
    <div className={'flex'}>
    <img className={'p-5 rounded-full h-24 w-32'} src='https://i.pinimg.com/736x/25/76/5f/25765fb914ec4e6bac0f855945daa3de.jpg' alt='image not found' />    
    <p className='pt-6'> <b> Mika Matikainen </b>is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant,Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.</p></div>
    </div> <hr className={'border-t-2 border-black' }/>

    <h1 className={'text-center font-bold text-3xl pt-8'}>What to read next</h1>
    <div className={'flex flex-wrap'}>
        <div className={'w-full sm:w-1/3 p-4'}>
            <img src='https://m.media-amazon.com/images/I/41gsx2ICCML.jpg' alt='image not found' className='w-full h-96' />
        </div>
        <div className={'w-full sm:w-1/3 p-4'}>
            <img src='https://m.media-amazon.com/images/I/41gsx2ICCML.jpg' alt='image not found' className='w-full h-96' />
        </div>
        <div className={'w-full sm:w-1/3 p-4'}>
            <img src='https://m.media-amazon.com/images/I/41gsx2ICCML.jpg' alt='image not found' className='w-full h-96' />
        </div>
    </div>
    

        <hr />
        <p className={'pt-8 font-bold text-center text-xl'}>Sign up for the newsletter</p>
        <p className={'text-center'}>If you want relevant updates occasionally, sign up for the <br /> private newsletter.
        Your email is never shared.</p>
        <span className={'flex justify-center pt-5'}>
        <input className={'border border-black'} type='text' placeholder='Enter your Email' /> <button className= {'bg-black text-white p-2'} >SIGN UP</button>
        </span><br /><hr />
    


    <footer className={' bg-black text-white pt-5'}>
        <p className={' font-semibold tracking-widest'}>Digital product design Remote work UX design Distributed teams Creativity Strategy Suspense Growth design Distributed teams Digital product design </p>
        <br />
        <h3 className={'font-semibold text-3xl pt-5 text-center font-serif'}>NORDIC ROSE</h3>
        <p className={'text-center pt-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br /> velit tempus erat egestas efficitur. In hac habitasse <br /> dictumst. Fusce a nunc eget ligula suscipit fi.</p>
        <p className={'pt-5 text-center'}> 2023 NORDIC ROSE.&copy; All rights reserved.</p>
        <p className={'text-center font-semibold'}>Made With &hearts; by Arslan Qaisar</p>
    </footer>
    </>
   
  )
}


 