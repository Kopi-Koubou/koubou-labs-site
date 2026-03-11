function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-custom text-center">
        <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          © {new Date().getFullYear()} Koubou Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
