export default {
  name: 'router-link',
  functional: true,
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String
    }
  },
  render(h, context) {
    console.log(context);
    let tag = context.props.tag || 'a';
    const clickHandler = () => {
      context.parent.$router.push(context.props.to);
    }
    return h(tag, {
      on: {
        click: clickHandler
      }
    }, context.slots().default);
  }
}