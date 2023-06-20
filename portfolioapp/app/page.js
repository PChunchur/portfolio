import Image from 'next/image'

export default function Home() {

  const LOGO_SIZE = 150
  const ICON_SIZE = 50
  const PROFILE_PIC_SIZE = 200

  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-start p-5">
      <header className='flex flex-row h-max w-full items-center justify-between bg-white px-3 lg:px-10'>
        <Image
          className='w-[70px] lg:w-[120px]'
          src={'/logo-wobg-min.png'}
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          alt={'PC\'s logo image'}
        ></Image>
        <aside className='flex flex-row gap-5 lg:gap-10 w-max h-max'>
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
      <section className='flex flex-col w-full h-full justify-start items-center bg-white gap-10'>
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
        <article className='flex w-8/12 text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </article>
      </section>
    </main>
  )
}
