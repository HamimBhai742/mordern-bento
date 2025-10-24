import {
  Star,
  TrendingUp,
  Users,
  Calendar,
  Zap,
} from 'lucide-react';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 '>
          {/* Create and schedule content */}
          <div className='bg-orange-100 rounded-2xl p-6 flex flex-col justify-between row-span-1 lg:h-[115%]'>
            <div>
              <h3 className='lg:text-5xl text-3xl leading-14 font-bold text-gray-800 mb-2'>
                Create and schedule content{' '}
                <span className='text-purple-600'>quickly</span>
              </h3>
              <div className='flex items-center justify-center mt-9 gap-2 text-xl font-semibold text-[#8663AE] bg-[#FFCD66] py-4 px-5 rounded-full w-fit mx-auto'>
                <span>Create Post</span>
                <Zap className='w-4 h-4' />
              </div>
            </div>
          </div>

          {/* Social Media 10x Faster */}
          <div className='bg-purple-600 rounded-2xl px-6 text-white lg:col-span-2 py-16'>
            <h2 className='lg:text-6xl text-3xl font-bold mb-2 text-center'>
              Social Media <span className='text-[#F8CC86]'>10x</span>
            </h2>
            <h2 className='lg:text-6xl text-3xl font-bold mb-4 text-center'>
              Faster with AI
            </h2>
            <div className='flex mt-6 md:mt-10 justify-center items-center gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-6 h-6 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <p className='text-purple-100 font-semibold text-center'>
              Over 4000 5-star reviews
            </p>
          </div>

          {/* Schedule to social media */}
          <div className='bg-[#DCD1FC] rounded-2xl  row-span-2'>
            <h3 className='text-3xl px-12 py-6 font-semibold text-gray-800'>
              Schedule to social media.
            </h3>
            <div className='bg-white rounded-l-lg p-3 ml-12 lg:my-8'>
              <div className='font-semibold text-[rgb(69,72,80)]'>
                Best Time to Post
              </div>
              <hr className='text-gray-300 my-3' />
              <div className='flex gap-3'>
                <div className='flex flex-col items-center justify-between'>
                  <h5 className='text-sm text-[#EF758D] px-2 py-1 bg-[#FCE3E4] font-semibold border border-[#EF758D] rounded-full'>
                    Mon
                  </h5>
                  <div className='w-3 h-22 bg-purple-600 rounded-full'></div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <h5 className='text-sm text-[#DDD] font-semibold'>Tue</h5>
                  <div className='w-3 h-28 bg-purple-600 rounded-full'></div>
                </div>
                <div className='flex flex-col items-center justify-between gap-2'>
                  <h5 className='text-sm text-[#DDD] font-semibold'>Wed</h5>
                  <div className='w-3 h-44 bg-purple-600 rounded-full'></div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <h5 className='text-sm text-[#DDD] font-semibold'>Thu</h5>
                  <div className='w-3 h-32 bg-purple-600 rounded-full'></div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <h5 className='text-sm text-[#DDD] font-semibold'>Fri</h5>
                  <div className='w-3 h-28 bg-purple-600 rounded-full'></div>
                </div>
                <div className='flex flex-col items-center justify-between'>
                  <h5 className='text-sm text-[#DDD] font-semibold'>Sat</h5>
                  <div className='w-3 h-30 bg-purple-600 rounded-full'></div>
                </div>
              </div>
            </div>

            <div className='pl-12 pb-6 pr-6 mt-4 text-gray-700'>
              <p className='font-semibold text-[#7853DB]'>
                Optimize post timings to publish content at the perfect time for
                your audience.
              </p>
            </div>
          </div>

          {/* Write your content using AI */}
          <div className='bg-yellow-200 rounded-2xl p-8 md:row-span-2 lg:mt-16'>
            <h3 className='text-3xl font-semibold text-gray-800 mb-4 max-w-44'>
              Write your content using AI
            </h3>
            <figure className=' mt-8'>
              <img
                src='../ai.png'
                className='object-cover w-full rounded-xl'
                alt=''
              />
            </figure>
          </div>

          <div className='bg-white rounded-2xl p-6'>
            <div className='flex items-center overflow-clip gap-3'>
              <div className='flex items-center gap-4 mb-6 bg-gray-200 border-gray-400 border rounded-full w-fit px-4 py-2'>
                <div className='bg-[#FFCC69] p-1 rounded-lg'>
                  <FaInstagram className='w-6 h-6 text-purple-600 ' />
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>@hamim742</span>
                  <span className='text-sm'>12k Followers</span>
                </div>
              </div>
              <div className='flex items-center gap-4 mb-6 bg-gray-200 border-gray-400 border rounded-full w-full px-4 py-2'>
                <div className='bg-[#FFCC69] p-1 rounded-lg'>
                  <BsTwitterX className='w-6 h-6 text-purple-600 ' />
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>@hamim742</span>
                  <span className='text-sm'>8.5k Followers</span>
                </div>
              </div>
            </div>
            <h2 className='text-3xl font-semibold text-gray-800 mb-4 max-w-44'>
              Manage multiple accounts and platforms.
            </h2>
          </div>

          {/* Maintain consistent posting */}
          <div className='bg-[#FFCC69] rounded-2xl pl-6 pt-6 pr-6'>
            <h3 className='text-3xl max-w-44 font-semibold text-gray-800 mb-4'>
              Maintain a consistent posting schedule
            </h3>
            <div>
              <div className='flex items-center gap-2 bg-[#734CD7] justify-between p-4 rounded-t-xl text-white'>
                <div className='flex gap-2 items-center '>
                  <Calendar className='w-5 h-5 text-orange-600' />
                  <p className='font-semibold'>
                    {new Date().toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <p className='font-semibold'>
                  {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                </p>
              </div>
              <div className='flex justify-between items-center bg-white p-6'>
                <div className='w-4 h-4 bg-purple-400 rounded-full'></div>
                <div className='w-4 h-4 bg-purple-600 rounded-full'></div>
                <div className='w-4 h-4 bg-purple-400 rounded-full'></div>
                <div className='w-4 h-4 bg-purple-600 rounded-full'></div>
                <div className='w-4 h-4 bg-purple-400 rounded-full'></div>

                <div className='w-4 h-4 bg-purple-600 rounded-full'></div>
                <div className='w-4 h-4 bg-purple-400 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Manage multiple accounts */}
          <div className='bg-gray-100 rounded-2xl p-6'>
            <div className='text-7xl font-bold text-gray-800'> {'>'}56%</div>
            <div className='font-semibold my-3 text-xl text-gray-600'>
              faster audience growth
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='flex -space-x-2'>
                <div className='w-16 h-16 bg-blue-500 rounded-full border-2 border-white'></div>
                <div className='w-16 h-16 bg-pink-500 rounded-full border-2 border-white'></div>
                <div className='w-16 h-16 bg-green-500 rounded-full border-2 border-white'></div>
              </div>
            </div>
          </div>

          {/* Grow followers */}
          <div className='bg-[#7751DC] rounded-2xl p-6 lg:col-span-2 flex gap-8 items-center lg:justify-between flex-col lg:flex-row'>
            <div className='relative pb-4'>
              <div className='bg-white  w-fit rounded-lg p-4'>
                <h4 className='font-semibold text-gray-600 mb-2'>
                  Followers Growth
                </h4>
                <div className='flex gap-3 items-center justify-between md:px-4'>
                  <h3 className='text-2xl font-bold text-gray-800'>20,642</h3>
                  <h5 className='text-green-600 font-semibold text-sm bg-green-100 rounded-full p-1'>
                    +4.8%
                  </h5>
                </div>
                <div className='flex items-end gap-4'>
                  <div className='w-4 h-16 bg-purple-600 rounded-full'></div>
                  <div className='w-4 h-18 bg-purple-600 rounded-full'></div>
                  <div className='w-4 h-18 bg-purple-600 rounded-full'></div>
                  <div className='w-4 h-22 bg-purple-600 rounded-full'></div>
                  <div className='w-4 h-20 bg-purple-600 rounded-full'></div>

                  <div className='w-4 h-24 bg-purple-600 rounded-full'></div>

                  <div className='w-4 h-28 bg-purple-600 rounded-full'></div>
                </div>
              </div>
              <div className='bg-white flex items-center gap-4  rounded-full p-2 w-fit left-16 top-40 absolute shadow-lg'>
                <div className='flex items-center gap-2 mb-4'>
                  <Users className='w-5 h-5 text-purple-600' />
                  <TrendingUp className='w-5 h-5 text-green-500' />
                </div>
                <div>
                  <span className='text-sm text-gray-600 font-semibold'>
                    Followers
                  </span>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl font-bold text-gray-800'>
                      89,932
                    </span>
                    <span className='text-green-600 font-semibold text-sm bg-green-100 rounded-full p-1'>
                      +4.8%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-4xl font-bold max-w-64 text-white mb-2'>
                Grow followers with non-stop content
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
