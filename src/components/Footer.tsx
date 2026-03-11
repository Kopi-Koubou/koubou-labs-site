function Footer() {
  return (
    <footer className="py-8 border-t border-stone-200">
      <div className="container-custom text-center">
        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} Koubou Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
