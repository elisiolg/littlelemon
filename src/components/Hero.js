import React from "react";

function Action() {
  return null
}

function Image() {
  return null
}

class Hero extends React.Component {
  static Action = Action
  static Image = Image

  render() {
    const {
      className,
      title,
      subtitle,
      description,
      children
    } = this.props;
    const action = children.find(child => child.type === Action)
    const image = children.find(child => child.type === Image)

    return (

      <section className={className}>
      <div className="hero">
          <div className="txt">
            <h1>{title}</h1>
            <span className="subtitle">{subtitle}</span>
            <div className="call-to-action">
              {description}
            </div>
            {action ? action.props.children : null}
          </div>
          <div className="image">
          {image ? image.props.children : null}
          </div>
        </div>
    </section>
    )
  }
}

export default Hero;
