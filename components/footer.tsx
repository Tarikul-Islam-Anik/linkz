import data from 'data/data.json'

export default function Footer() {
  const { footer } = data
  return (
    footer.enable && (
      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-6">
          <p className="text-center text-base text-gray-400">{footer.text}</p>
        </div>
      </footer>
    )
  )
}
