import classNames from 'classnames'

const Container = ({ children, className, containerClass }) => {
  return (
    <section className={className}>
      <div className={classNames('container', containerClass)}>{children}</div>
    </section>
  )
}

export default Container
