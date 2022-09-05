import { commentIcon } from './comment'
import { compleinIcon } from './complein'
import { crossIcon } from './cross'
import { eyeIcon } from './eye'
import { hideIcon } from './hide'
import { menuIcon } from './menu'
import { saveIcon } from './save'
import { shareIcon } from './share'
import { userIcon } from './user'

export const enum EIcons { comment, complein, eye, hide, save, share, user, menu, cross }

export const icons = {
  [EIcons.comment]: commentIcon,
  [EIcons.complein]: compleinIcon,
  [EIcons.eye]: eyeIcon,
  [EIcons.hide]: hideIcon,
  [EIcons.save]: saveIcon,
  [EIcons.share]: shareIcon,
  [EIcons.user]: userIcon,
  [EIcons.menu]: menuIcon,
  [EIcons.cross]: crossIcon
}