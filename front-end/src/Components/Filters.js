import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { SelectorIcon, CheckIcon} from '@heroicons/react/solid'

function Filters() {
  const yearsFilter = [
      {
          title: "Sort by Year",
      },
      {
          title: "1900 - 1950"
      },
      {
          title: "1950 - 1970"
      },
      {
          title: "1970 - 1990"
      },
      {
          title: "1990 - 2000"
      },
      {
          title: "2000 - 2010"
      },
      {
          title: "2010 - 2020"
      },
      {
          title: "2020 - Actual"
      },
      ]

      const timeFilter = [
      {
          title: "Sort by Time"
      },
      {
          title: "Short - less than 30 minutes"
      },
      {
          title: "Medium - 30 minutes to one hour"
      },
      {
          title: "Long - More than an hour"
      },
      ]

      const ratingFilter = [
      {
          title: "Sort by Rate"
      },
      {
          title: "One star"
      },
      {
          title: "Two stars"
      },
      {
          title: "three stars"
      },
      {
          title: "Four stars"
      },
      {
          title: "Five stars"
      }
  ]
  const categoryFilter = [
    {
      id: 0,
      title: "Drama"
    },
    {
      id: 1,
      title: "Romance"
    },
    {
      id: 3,
      title: "Action"
    },
    {
      id: 4,
      title: "Horror"
    },
    {
      id: 5,
      title: "Thriller"
    },
    {
      id: 6,
      title: "Adventure"
    },
    {
      id: 7,
      title: "Musical"
    },
    {
      id: 8,
      title: "Western"
    },
    {
      id: 9,
      title: "Documentary"
    },
    {
      id: 10,
      title: "Scy-Fi"
    },
  ]
  const [category, setCategory] = useState({title: "Category"});
  const [year, setYear] = useState(yearsFilter[0]);
  const [time, setTime] = useState(timeFilter[0]);
  const [rating, setRating] = useState(ratingFilter[0]);
  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: categoryFilter
    },
    {
      value: year,
      onChange: setYear,
      items: yearsFilter
    },
    {
      value: time,
      onChange: setTime,
      items: timeFilter
    },
    {
      value: rating,
      onChange: setRating,
      items: ratingFilter
    }
  ]
  return (
      <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
        {
          Filter.map((item, index) => (
            <Listbox key={index} value={item.value} onChange={item.onChange}>
              <div className='relative'>
                <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
                  <span className='block truncate'>
                    { item.value.title }
                  </span>
                  <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                    <SelectorIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveTo='opacity-0'>
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {
                      item.items.map((subItem, i) => (
                        <Listbox.Option key={i} className={({active}) => (`relative cursor-default select-none py-2 pl-10 pr-4 ${ active ? "bg-subMain text-white" : "text-main"}`)} value={subItem} >
                          {
                            ({selected}) => (
                              <>
                                <span className={`block truncated ${
                                  selected ? "font-semibold": "font-normal"
                                }`}>
                                  {subItem.title}
                                </span>
                                {
                                  selected ? (
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                      <CheckIcon className='h-5 w-5' aria-hidden="true" />
                                    </span>
                                  ) : null
                                }
                              </>
                            )
                          }
                        </Listbox.Option>
                      ))
                    }
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ))
        }
      </div>
  )
}

export default Filters