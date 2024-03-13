export default {
  name: 'router-link',
  render() {
    return <a>{this.$slots.default}</a>
  }
}