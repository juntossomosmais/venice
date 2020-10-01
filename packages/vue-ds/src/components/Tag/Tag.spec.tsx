import { mount } from '@vue/test-utils'

import Tag from './Tag.vue'

const DEFAULT_TAG_FORMAT = 'rectangle'
const DEFAULT_TAG_COLOR = 'default'
const ROUND_SQUARE_FORMAT = 'round-square'
const PRIMARY_COLOR = 'primary'
const START_ICON = 'jsm-icon-angle-right'
const END_ICON = 'jsm-icon-angle-left'
const SOME_TEXT = 'Venice is the best!'
const ROLE_BUTTON_WHEN_CLICKABLE = 'button'
describe('<Tag />', () => {
  it('Should display text and default color and format', () => {
    // given
    const container = mount(Tag, {
      slots: {
        default: SOME_TEXT,
      },
    })

    // then
    expect(container.exists()).toBeTruthy()
    expect(container.classes()).toContain(DEFAULT_TAG_COLOR)
    expect(container.classes()).toContain(DEFAULT_TAG_FORMAT)
    expect(container.attributes().role).not.toBe(ROLE_BUTTON_WHEN_CLICKABLE)
    expect(container.text()).toBe(SOME_TEXT)
  })

  it('Should use round-square format', () => {
    // given
    const container = mount(Tag, {
      propsData: {
        format: ROUND_SQUARE_FORMAT,
      },
    })

    // then
    expect(container.classes()).toContain(ROUND_SQUARE_FORMAT)
  })

  it('Should use different color by prop passed', () => {
    // given
    const container = mount(Tag, {
      propsData: {
        color: PRIMARY_COLOR,
      },
    })

    // then
    expect(container.classes()).toContain(PRIMARY_COLOR)
  })

  it('Should has icon when has passed by prop', () => {
    // given
    const container = mount(Tag, {
      propsData: {
        startIcon: START_ICON,
        endIcon: END_ICON,
      },
    })
    const start = container.find(`.${START_ICON}`)
    const end = container.find(`.${END_ICON}`)

    // then
    expect(start.classes()).toContain(START_ICON)
    expect(end.classes()).toContain(END_ICON)
  })

  it('Should has clickable class and emit click after click at tag', async () => {
    // given
    const container = mount(Tag, {
      propsData: {
        isClickable: true,
      },
    })

    // when
    await container.trigger('click')

    // then
    expect(container.emitted().click).toBeTruthy()
    expect(container.attributes().role).toBe(ROLE_BUTTON_WHEN_CLICKABLE)
  })
})
