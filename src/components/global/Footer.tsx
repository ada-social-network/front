export default function Footer () {
  return (
    <>
      <footer className="flex">
        <div className="fixed bottom-0 left-0 text-center w-full bg-red text-white z-50">
          <div className="container pt-3 mx-20 px-10 sm:flex sm:mt-auto">
            <div className="ml-12 mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text white md:mt-0 mb-1 hover:shadow-lg"><a href= "https://adatechschool.fr/">Ada Tech School</a></div>
            <div className="mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text-white md:mt-0 mb-1 hover:shadow-lg"><a href= "https://www.notion.so/Programme-Alternance-6f81e4b8ea3147018aecc3cce251ad38">Notion</a></div>
            <div className="mt-1 sm:mt-0 sm:w-full sm:px-8 flex md:flex-row font-normal text-white md:mt-0 mb-1 hover:shadow-lg"><a href= "mailto:bdadatechschool@gmail.com">Rejoindre le BDA</a></div>
          </div>
          <div className="w-full container px-1">
            <div className="w-full justify-end pt-2 border-t-2 border-white sm:flex text-sm text-white font-normal mb-1">
            © AdaHub {new Date().getFullYear()}</div>
          </div>
        </div>
      </footer>
    </>
  )
}