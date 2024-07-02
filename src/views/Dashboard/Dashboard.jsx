import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom"
import { getArticles } from "../api";
import logoSrc from '../../assets/Logo/Logo_white.svg'
import Slides from "../../components/Slider/Slider";
import store from "../../store";
import Loader from "../../components/common/Loader";

function deferDashboard() {
  const { accessToken } = store.getState()
  const articlesPromise = getArticles(accessToken)
  return defer({ articles: articlesPromise })
}
export default function Dashboard() {
  const dataPromise = useLoaderData()
  return (
    <div className=" flex flex-col text-[#fff] bg-black h-fit pl-[33px] py-[60px] sm:pt-[99px] sm:pl-[90px]">
      <div className=" flex flex-col gap-[54px] sm:gap-[80px]">
        <img src={logoSrc} alt="Dingoo" className="w-[68px] sm:w-[136px]" />
        <div className=" flex flex-col gap-[5px] sm:gap-[23px]">
          <div>
            <span className=" font-medium text-[24px] leading-[25px] sm:text-[48px] sm:leading-[50px]">Welcome</span> <span className=" underline underline-offset-4 font-medium text-[24px] leading-[25px] sm:text-[48px] sm:leading-[50px]">Test</span>
          </div>
          <div className=" font-semibold text-[12px] leading-[25px] sm:text-[24px] sm:leading-[50px]">
            Hope you having a good day!
          </div>
        </div>
      </div>
      <div className=" flex flex-col relative">
        <Suspense fallback={<Loader />}>
          <Await resolve={dataPromise.articles}>
            {((data) => {
              const photographyData = data.data.filter((item) => item.prompt === "Photography")
              return (
                <div className=" flex sm:gap-[30px] gap-[35px] flex-col">
                  <div className="font-medium sm:text-[48px] sm:leading-[50px] text-[24px] leading-[25px]">
                    Photography
                  </div>
                  <Slides slideItem={photographyData} />
                </div>
              )
            })}
          </Await>
          <Await resolve={dataPromise.articles}>
            {((data) => {
              const learningData = data.data.filter((item) => item.prompt === "Learning")
              return (
                <div className=" flex sm:gap-[30px] gap-[35px] flex-col">
                  <div className="font-medium sm:text-[48px] sm:leading-[50px] text-[24px] leading-[25px]">
                    Learning
                  </div>
                  <Slides slideItem={learningData} />
                </div>
              )
            })}
          </Await>
        </Suspense>

      </div>
    </div>
  )
}

export { deferDashboard }