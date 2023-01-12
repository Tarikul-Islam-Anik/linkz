import Image from 'next/legacy/image'
import data from 'data/data.json'
import Icon from './icons'
export default function UserInfo() {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-2 rounded-2xl bg-white p-8">
      <Image src={'/' + data.image} alt="OxyZen" width={96} height={96} className="rounded-full" />
      <div className="text-center">
        <h1 className="text-2xl font-bold leading-loose text-stone-800">{data.name}</h1>
        <p className="font-medium text-stone-500">{data.bio}</p>
      </div>
      <a
        href={'https://' + data.website}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center tracking-wide text-stone-400 transition hover:text-stone-500"
      >
        {data.website}
        <Icon label="externallink" />
      </a>
    </div>
  )
}
