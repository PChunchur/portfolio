'use client'
import Image from 'next/image'
import { Raleway, Libre_Caslon_Text } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['200', '300', '400', '500', '700']
})

const libreCaslon = Libre_Caslon_Text({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function Home() {

  const LOGO_SIZE = 150
  const ICON_SIZE = 50
  const PROFILE_PIC_SIZE = 200

  // event handlers
  const toggleTray = (e) => {
    const showbutton = document.getElementById('show-button')
    const hideButton = document.getElementById('hide-button')
    const tray = document.getElementById('tray')
    let rotation = showbutton.style.transform
    hideButton.style.transform = rotation
    rotation = rotation == 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)'
    showbutton.style.transform = rotation
    setTimeout(() => {
      let scale = tray.style.transform
      scale = scale == 'translateX(-1000px)' ? 'translateX(0px)' : 'translateX(-1000px)'
      tray.style.transform = scale
    }, 500);
  }

  return (
    <main className={`${raleway.className} flex z-0 min-h-screen h-screen flex-row items-center justify-start p-0`}>
      <section id='tray' className='translate-x-[-1000px] md:hidden duration-700 ease-in-out flex fixed top-0 left-0 z-10 flex-col h-full w-full bg-black text-white'>
        <section className='bg-pcRed w-full h-max p-5 flex justify-start'>
          <button id='show-button' className='duration-500 ease-in-out' onClick={toggleTray}>
            <Image
              className='w-[50px] md:w-[0px] rotate-90'
              src={'/menulogo.png'}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt={'PC\'s infinity logo image'}
            ></Image>
          </button>
        </section>
        <section className='flex flex-col w-full h-full items-center justify-center gap-10 text-2xl'>
          <h3 className='hover:text-pcRed'>About</h3>
          <h3 className='hover:text-pcRed'>Projects</h3>
          <h3 className='hover:text-pcRed'>Blog</h3>
          <a
            download
            href='/resume.pdf'
            target={'_blank'}
            className='flex flex-row w-max gap-3 h-max'
          >
            <h3 className='hover:text-pcRed'>Resume</h3>
            <Image
              className='bg-white rounded-full border-[1px] border-pcRed'
              src={'/download.png'}
              width={32}
              height={32}
              alt={'download'}
            ></Image>
          </a>
        </section>
      </section>
      <section className='hidden md:flex flex-col h-full w-2/12 bg-black  justify-center items-center  '>
        <a className='fixed hidden md:flex top-10 mt-[-25px] ml-10' href='#'>
          <Image
            className='w-[70px] md:w-[120px]'
            src={'/logo-wobg-min.png'}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            alt={'PC\'s logo image'}
          ></Image>
        </a>
        <section className='flex text-white flex-col w-full h-full items-start pl-10 justify-center gap-10 text-2xl'>
          <h3 className='hover:text-pcRed'>About</h3>
          <h3 className='hover:text-pcRed'>Projects</h3>
          <h3 className='hover:text-pcRed'>Blog</h3>
          <a
            download
            href='/resume.pdf'
            target={'_blank'}
            className='flex flex-row w-max gap-3 h-max'
          >
            <h3 className='hover:text-pcRed'>Resume</h3>
            <Image
              className='bg-white rounded-full border-[1px] border-pcRed'
              src={'/download.png'}
              width={32}
              height={32}
              alt={'download'}
            ></Image>
          </a>
        </section>
      </section>
      <section className='flex flex-col h-full w-full md:w-10/12'>
        <header className='flex flex-row h-max w-full md:pt-5 items-center justify-between bg-white px-5 pt-3 md:px-10'>
          <button id='hide-button' className='duration-500 ease-in-out' onClick={toggleTray}>
            <Image
              className='w-[50px] md:w-[0px]'
              src={'/menulogo.png'}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              alt={'PC\'s infinity logo image'}
            ></Image>
          </button>
          <aside className='flex justify-end flex-row gap-5 md:gap-10 w-full h-max'>
            <a href='https://github.com/PChunchur' target={'_blank'}>
              <Image
                className='w-[30px] md:w-[50px]'
                src={'/github-min.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'github image'}
              ></Image>
            </a>
            <a href='https://www.linkedin.com/in/pranavchunchur/' target={'_blank'}>
              <Image
                className='w-[30px] md:w-[50px]'
                src={'/linkedin.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'linkedin icon'}
              ></Image>
            </a>
            <a href='mailto:chunchur.pranav@gmail.com' target={'_blank'}>
              <Image
                className='w-[30px] md:w-[50px]'
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
              className='w-[150px] md:w-[250px] rounded-md shadow-md shadow-black'
              src={'/pranav.png'}
              width={PROFILE_PIC_SIZE}
              height={PROFILE_PIC_SIZE}
              alt={'picture of pranav'}
            ></Image>
            <h1 className={`${libreCaslon.className} font-bold font text-2xl md:text-4xl`}>Pranav&nbsp;<span className='font-normal'>Chunchur</span></h1>
          </article>
          <article className='flex flex-col gap-5 w-8/12 text-center md:text-md'>
            <section className='flex flex-col items-center justify-between gap-3'>
              <h6 className='md:text-xl'>
                iOS app developer from <span className='text-pcRed'>&nbsp;Bengaluru&nbsp;</span>
              </h6>
              <h6>
                CSE undergrad at VIT Bhopal | Graphic design | Finance | President of Technomech Club
              </h6>
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}
