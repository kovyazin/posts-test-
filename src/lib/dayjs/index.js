import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'

dayjs.locale('ru')
dayjs.extend(RelativeTime)

export { dayjs }