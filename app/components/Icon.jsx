/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
  { id: 1, name: 'Tentang Santri Hub', stat: 'tentang kami', icon: UsersIcon, change: '122'},
  { id: 2, name: 'Info Kampus', stat: 'Info Kampus', icon: MailOpenIcon, change: '5.4%'},
  { id: 3, name: 'Jalur Masuk', stat: 'Jalur Masuk', icon: CursorClickIcon, change: '3.2%'},
  { id: 4, name: 'Beasiswa ', stat: 'Beasiswa', icon: CursorClickIcon, change: '3.2%'},
  { id: 5, name: 'Event', stat: 'Event', icon: CursorClickIcon, change: '3.2%'},
  { id: 6, name: 'Kalender', stat: 'kalender', icon: CursorClickIcon, change: '3.2%'},
  { id: 4, name: 'Blog', stat: 'blog', icon: CursorClickIcon, change: '3.2%'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Icon() {
  return (
    <div>
      <dl className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-100 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-2">
                <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="font-semibold text-gray-900">{item.stat}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
