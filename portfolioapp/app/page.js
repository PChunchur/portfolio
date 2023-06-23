import Image from 'next/image'

export default function Home() {

  const LOGO_SIZE = 150
  const ICON_SIZE = 50
  const PROFILE_PIC_SIZE = 200

  return (
    <main className="flex min-h-screen h-screen flex-row items-center justify-start p-0">
      <section className= 'flex flex-col h-full w-2/12 bg-black '>
      <a className='fixed top-10 mt-[-25px] ml-10' href='#'>
            <Image
              className='w-[70px] lg:w-[120px]'
              src={'/logo-wobg-min.png'}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt={'PC\'s logo image'}
            ></Image>
          </a>
           </section>
      <section className= 'flex flex-col h-full w-10/12'>
        <header className='flex flex-row h-max pt-5 w-full items-center justify-between bg-white px-3 lg:px-10'>
          
          <aside className='flex justify-end flex-row gap-5 lg:gap-10 w-full h-max'>
            <a href='https://github.com/PChunchur' target={'_blank'}>
              <Image
                className='w-[30px] lg:w-[50px]'
                src={'/github-min.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'github image'}
              ></Image>
            </a>
            <a href='https://www.linkedin.com/in/pranavchunchur/' target={'_blank'}>
              <Image
                className='w-[30px] lg:w-[50px]'
                src={'/linkedin.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'linkedin icon'}
              ></Image>
            </a>
            <a href='mailto:chunchur.pranav@gmail.com' target={'_blank'}>
              <Image
                className='w-[30px] lg:w-[50px]'
                src={'/email-min.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'picture of mail icon'}
              ></Image>
            </a>
          </aside>
        </header>
        <section className='flex flex-col pt-20 w-full h-full justify-start items-center bg-white gap-10'>
          <article className='flex flex-col gap-10 items-center justify-center'>
            <Image
              className='w-[150px] lg:w-[200px] rounded-md shadow-lg shadow-black'
              src={'/pranav.png'}
              width={PROFILE_PIC_SIZE}
              height={PROFILE_PIC_SIZE}
              alt={'picture of pranav'}
            ></Image>
            <h1 className='font-bold text-2xl lg:text-4xl'>PRANAV</h1>
          </article>
          <article className='flex flex-col gap-5 w-8/12 text-center text-lg'>
            <section> I’m Pranav Chunchur a Third year CSE student at VIT Bhopal. My current passion lies in the field of iOS app development, I've also dabbled in graphic design, adding an extra touch of visual finesse to my app development skills. After all, why settle for ordinary when you can merge functionality with eye-catching aesthetics?.
              With a strong cup of filter coffee as my trusted companion I create new ideas and figure out ways to implement it while also refining my skills in the process
            </section>
            <section> Beyond the tech world I am an athlete and also hold the position of President at Technomech - A technical club at VIT Bhopal while still managing to explore domains of my interest and learn something new everyday.
              So, step into my digital realm and experience the exciting convergence of technology, design, and commitment to innovating new ideas.
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}
