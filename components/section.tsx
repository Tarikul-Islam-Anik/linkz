import React from 'react'
import Anchor from './anchor'

interface SectionProps {
  name: string
  items: object[]
}

const Section: React.FC<SectionProps> = ({ name, items }) => {
  return (
    <section>
      <div className="text-mono mx-auto mb-4 flex w-1/2 items-center text-center text-stone-400">
        <hr className="my-2 w-1/2 border-t border-stone-300/75" />
        <h3 className="mx-4">{name}</h3>
        <hr className="my-2 w-1/2 border-t border-stone-300/75" />
      </div>
      <div className="space-y-6">
        {items.map((item: object, index: number) => (
          <Anchor key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Section
