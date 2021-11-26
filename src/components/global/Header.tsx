export default function Header () {
  return (
    <>
      <nav className="flex h-14 w-full mx-auto flex bg-yellow">
        <div className="w-full h-2/3 relative bg-pink">
          <div className="w-full relative flex ml-8">
            <span
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-red"
            >
              AdaHub
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
