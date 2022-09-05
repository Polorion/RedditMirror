import React, { FC } from 'react'

interface Item {
  id: string
  listElement: React.ReactNode
  onClick?: (id: string) => void
  className?: string
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
}

interface GenericListProps {
  list: Item[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export const GenericList: FC<GenericListProps> = ({ list }) => (
  <>
    {
      list.map(({ As = 'div', listElement, onClick = noop, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {listElement}
        </As>
      ))
    }
  </>
)

