import Footer from 'components/footer'

export default function Profile({ children }) {
  return (
    <>
      <div className="mx-auto max-w-md space-y-6 px-5 py-16 md:px-0">{children}</div>
      <Footer />
    </>
  )
}
