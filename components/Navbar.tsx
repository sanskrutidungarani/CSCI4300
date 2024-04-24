"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const { data: session }: any = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/mealDashboard" },
  ];

  return (
    <>
      {/*
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
                */}

      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">KnowWhatYouEat</span>
              <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAFaAX8DASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAQMEAgf/xABEEAACAgEBBQQHBQMLAwUAAAAAAQIDBBEFEiExURNBYYEGIjJxkaHBFCNSsfBCYtEkMzRDcnOCkqLC4VOTshUWJkTx/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMFBgQBAgf/xAAxEQEAAgECBAUCBgICAwAAAAAAAQIDBBEFEiExEyJBUXEyYRSBobHB0SPwM5EVQuH/2gAMAwEAAhEDEQA/APrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJtD0j2Vg70ITeTkLh2dDTgn0nYk0vg34dIr3rSN7zsb7JpmIyjJKUZKUWuDTTTXvRRqc7a3pJn14U7HVh8bcmrHbjHsI6axnJattvRc9OPJF5hGMVGMUlGKUYpLRJJJJJEeDPGbzV7PInfs9AA6XoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxbQ2lg7Nq7XKs3W9ezrjpK2xr8MdV8dUj5taKxvI7GQu0fSPZmDvVwl9pyFw7Olpxi+lli1S+Dfh0qu1PSLaO0d6qDeNivVdlXJ701y+8s5v3JJe/TVwvlp3FLqOJdeXD/2htk9ISm0Nu7V2g5xstddD1XY0axhp0k1xfm/gRfD/lA34eM83Lw8Ra/yi6EJNd1ftTl5JNlRa181vNO8yj6z3Xb0UwPsuB9qnHS7O0s481THVVrzXreZYjxCEYQhCC0jCKhFLkklokezW4ccYqRSPR0xG0AAJnoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcW1NoVbNw7sqzRtepTDXTtLZJ7sfd3vwT6Hza0VibW7Dj21tunZVe5FRszLYvsq9eEVyU7PDou/8vn+Tk5OXdZfkWSstm9ZSl+SXJJdO78sZGRflXXZF83O22W9OTWnHlol+Xhp0NRltVqr57bekejntbeQ7tmbPltDIcXJ141Ee3zblwVVMdW0pdX/HocdcLLZ11VQc7bZKuuC5ylLgl/EtO1IV7D2NTs2qWuVnSc8q2PtSUdHOXXi92K4ck+h8afFFom9vpj93lY9VXulVO66VNfZ1ysm66/8Ap1uT3Y8ei4eXxn/RDHVu0rr2tVi40mvCy6WkX8FL4ld093dy5LjyRdPQupLG2nf3zya6f+1Wp/7yTQ159RHt3e06ytYANU6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYZRfS3Md2dXhxb7PEgnJdbbUp6+S0L2fK9pW9ttDaNvPfyr2n0jvvdXw0KrieSa4or7o8k9HIAbsXGtzMnGxKm1PIsVakv2Fxbn/hSb8jO1ibTtCBZvRLZik57VuS0jv04e9y09my1fOK9zITbOe9o7QyL0/uovsaF0qhy4ePF+bLftu+nZOxljY+kN+uGFjxXFxr3dJS8lr8T5/7/ANdSy1cxhx109e/eX3fyxyhfvRCOmyZS/Hl3y+G7D6FBPofoqtNi4j/Fblv4Xzh9BwyP82/2Mf1JwAGldAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAwzTkZWPjQ37pxiu7XnJ6d0VxILK25fPWONFVx4+vLSVj8uS+ZxanW4dNHnnr7OrBpMuefJH5rHryNGTlY+JBWXS3U3pFLjKT05JFOlZkZE4b9lk5zlGEHKTbUpPRaakhtuzeyoVa8KaYRf8Aal635aFZPGObFfJSvbb9VhHC+XLWl7d9/wBHTbt+WrVFCS14O2T1fvjHT82aHt3aD/ZoXgoS/PeIrgCjvxPU2nfm2+FzXh2nrG3KmIbfylp2lNMl0jvRb822vkS2FtLHzdYx3o2xW9KElx04JtNcGioPTw8/iS+zq44MXtDK1hBxcKINevPe466fkd2h1+ptk5bzvX1mfRxa3Q4K496Rtb0+6ygh69vYkp6Tqsri9EpNqSWv4tORLQnCyMZwkpRktU09UaXFqcWb/jmJZ7LgyYfriYez5Hbr2tuv45/mfWz5ZtKvsdobRqS0UMu9RX7u+9PloV3FY8tZcuTs5P15d5bPQ/CUrMvaE1/Nr7LTrp7XCVjX+lL3sqb+L7l1Pp2zMaGzNmYtM+HYUOy9/vvW2x/Fs5OHYufJz29Hxjjed1R9Ksz7RtFY8X93hVqvg9V2s9Jza+S8ivmy+2d9198/butstlp+KcnN/maziz5JyZJtPq+bTvIfS/R6t17G2WmtN+hXaf30nb9T5xRRblXUY1WvaZFkaY6d28+MvLn5H1emuFNVVVaShVCNcF0jFKKRZ8KpPNN/ySY4bAAX6YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGRu0dqV4iddek8jT2dfVhr3z/gSFjkoT3NO03JOCfLe04alIs7XtLO13lZvPf3/AGt/XjqU3FNZbTU2x959Vpw3S11F5m89I9Gbrrr5uy2bnN977l0S7keAYZjLXtbzWneZa2tYpHLWNodmza+1zsSOnCM+1l4KC3l89DxnWdrl5c9ddbppe5NxXySOvZGlb2hlP/6+NN/5tZf7SM//AHjzO2/k0ta+87/w46efU2n2iI/kMPk/1y4h8iTxcSnHrWdnLSC/o9D03rZc05Igw4bZbcsdo7z7J82auKu8957R7sYmLVRUs7PTUFxx6H7Vsuab/X/PLlZV2Xa7LWuWkIL2YLovqMrKuy7XZY+S0hBezCPco/U0EmfNEV8HF9MevrPyjw4bTbxcvf8Ab4CU2TnPHtVFj+5se6ukJvo+hFmCPBntgyRkokz4K56TS696o+f+lOP2O1bLO7JpquWnLVLs2v8ATr5l12dkPJw6LJP193cm+sovTXz5+ZCel+J2uHjZcU97FtcJ9Ozu0Wr9zUfibPWRGfTc9flg81JrM1nvCt7BxPtm1sGtrWFUnlW9/q0tSWv+LdXmXL0kzPsuy8mKek8prFhpz0nrv8Om6n8SM9DcTdqzs6S43TWPT/d1+tJr3t6f4SO9K837RnxxovWvCi4P+9npKX0XkcmKY0+km/rZFHSivfL9aaB6aceS4/DieoRnZOFcIynZN7sIQi5Sk+ijHj8i4bE9GOydeXtKKdkXv1YvCUK2uKlbpqm13JfF/s1uHT3z22rCOtZmWfRfY06UtpZUN22yG7i1vnXXLnZJdX3eHv4WtHhTqT0c4Jrg05R118Ue11TNRgxUw15KynrG3RkA0W5WJTr2t9UWuac473w5ktr1p1tOz6bwRMtsVW210YdcrrZySi5awrS5uT/a4e4lVrw156cSPHmplnyTu8id+zIAJ3oAAAAAAAAAAAAAAAAAAAAAAAAAAMEbtLaMcOPZ16PImnup8oL8UvodGdlww6JXS4v2a4d8p9y+r9xULbLLrJ2WS3pzblJ+Ph4dCk4nr/Ar4dJ80rbh2i8e3Pf6YbI5OTC9ZPaSduu85S46+DS7iWuqp2tj/asdKOVWt2yHfLRcn9H/AA4QSXU342TbiXQtqfFJqS7pRfFxfv8A1yM3p9VtvTN1rPf591/qNPvtfD0tHb49mlppuLTTT0afc19eo8Scy8WjaNCzcNaXafew6tLin4og9JNqMU5TeqSS1cmu7Q+NRp5wX6dYntPuk0+ormrv2mO8eyUq+52Nkz78rI7OHujpF/8AjIiuS+f1J3LxMx7P2dj1VSluQ7S7Rpbs93k1Lj3s5sbErxa/tufFqKf3FEuE7Jrk5J/wO3PpslrUx7bRWO/7uLBqaVra++8zaenr7QxiYtVFSztoL1Fxx6HpvWPmnL9f88mTlXZdrstfLhCK4RhHuUV+Yysq/Ltdlr4rVQivZhHuUfqaDizZqxXwcX0x/wBz95dmHDbm8XL9U/oB69wMNpdPM5HWcQ+BshTkW6dnVbPxrrk18UddWyNpWuKdaqi/27ZR4f4Ytv5E+PT5ck+Ssz+XRBk1GLH9cwldgb32XI15faHp/wBuBIZmNHLxMrGnppfVOvV/sya9WXk9GMTGrxKK6YvXd4yk+cpPm2YhlReZfiS0UowhZD96L4P4G409PBwUx5Z69mK1WSMuW147TLhcqdgbEhq47+NRGME+VuVPjpouPGTbendr0Kng+j22NpWSvyFLGrsk7J25MfvrHJ7zkquer58Wj6DOuubhKcISlCW9W5RTcJaNax17zzbZVRXO21qMK05Sb6dOPU8zaWl9uadq19HNNd+6Kow9j+j9Dsrrcr5rc7Sb3r7muOmvcuuiS9/fEZe0czLb3puNb5VwbUEuj6v9eCxkX5W0cic1XZPThCuuMpdnHuT07+v/ACe4bJ2pPT+TuKf/AFJ1pefFv5Gc1WozajyaesxSPb1+UFrTbpVwmU2tNHoS0dh3xW/k5FFUVza1n/qnuo8yewcXVQhPNtX45fdJ9Hw3f9LOP8FlrG+WeX5n+HzyT6o2MbbXJQVk1HXe3VKW7px46Hh97fLTX68zqyM3IyI7jcYUx9mmlKNaS6pfxfkdGycB5d3a2L+T0y46/wBZYuKWnh3kdcM5ssY8U7/eXm3NO0JTY2C6K/tFq0uvitIvnXXzUfe+b/4JcxppojJutPgrgxxjq64jaNgAHQ9AAAAAAAAAAAAAAAAAAAAAAAAAwcW1L5UYWRKPtSXZx98+BHlyRjpN59H3jpOS0Uj1V7amZ9ryZbr+6q1hV9ZeZwjgtW+B7hTfbp2VVs/7uEpL4pM/Pct758s2mOstxjrTBjisT0h4B217J2nZyp3E++ycV8Unr8joexp1pPJzMelc+L11X+JxJK6HPbrFZR21uCvTmhzbNyMmrJqjRFzdslCcNdFJd8n005+XiWirGxq7bLoVQjZb7ckuL8PccOzMLZ9MrLce93zS7OUnu7seT0WiX5kqavhumtjxR4kxM+nrszXENRXJlnw4mPf7jIbbGDkZMsaePW7JJSjNb0UlHg17TS6kyV/a20b4X9hjWuCrWljg1q5vu1XHh9SXiNsVcExl7fZHoK5bZ48Lv92iGw9oS4zdNa046ylJryS0+ZsWytnVf0naUNfw19nGXwbk/kRVlt9v87bZN8/XlKX/AJM8GU/Eaan049/mf6aXwNRb68m3xH9pj/4zTxXa3yX95r8JOMTP/quzqP6Ls6Kf4pbkH73up/mQxj3Hv/kL1/46xX4j+z8BSfrtNvmf6S09uZ0tdyFMF13ZN/N6fI53tbae8pPIfDu3YKOnRpJHEOHB+JFbXai0788pI0WCsfRC6Y1v2jHouS07WuE2uja4or+0MiVG153R1+5lVwX7S3I6x89Sd2dDcwcKL5qmvXzWpVMuztcrKsXKdtjT/d3np9C/4nmtXTY59Z2lhtTtW0xHbddISjOMZxacZJSTXJprVGvIpqvglZV2sYvfUG+EpJNcU3p395x7Gu7XBrWurplKl+6Ps/LQki6xXjPii3vBHWEBdti3F1phgKlx4QVj0Wn7sYpL4M4bdsbTs1XaqtNaaVRS+ctZfMtNtNN0dy2EJx15SSfHTTVEZdsHBm9ap21Pom5R+EuPzKjVaTWTP+LJ09uyO1b+kq5ZZda96yyc3y3pycn8X/E8P9ak5/7eu1/pkNP7l8vdv/U6Kdg4kGnfZO7R+zpuVv3xTb+ZTxwvV5Leev57x/aPw7Sh8HAvzbEopwpi/vLO/TpHxLbRVXRXXVXFRhCKUUuhmEIVxjCEYxjFaRUUkkvBI9mk0OgppK+8+6elOUABZvsAAAAAAAAAAAAAAAAAAAAAAAAAAGDg2jk4FNSryo9orOKqitZSS7+aO995S8zIeTk3W81KT3fCC4R+RU8T1f4fFtHeVjw/TfiMm/pDtW0sKpv7Ns6mElynNpvz0jr/AKjzZtraUvZdda5fd1r856kbxMcTK21+ee1tviNv2aWNDgjrNd/mZl0WZmbbrv5FzXet+Sj8E9Pkc+rWrfxYeund5kpiYlNFSzs5aVrjRU/atlzWq/I+cdMmovtvP3n2feS2PT13isfaIdux1LEx5zypQqjkWQdCm9JS9XjqmTLlFR3m0o6b2raSS66lNysu/LtdlnBLhCK9mMei+pIQ+52HN6etlXr4qSX+0vtFxCtKzjrHlrG+/wDvupNXobWtGS0+a07bf77JG7bOFXdCuL7SLellkNHGC6+P6843amz1BvLx/Wpn680nru73HeT6P9eERy1+RLbL2iqv5NketRPhFtaqDfDRrocUa2NbM4tR037T7OqdHbR7ZcHXbvHuigSe0tmvHbyKlrjz56cdxv6dCM8Sq1GC2DJNLLXDmpmrz0kABzpw901O+6mlf1tkYe5N6N+XPyPD/Xu7yY2Fjb91mTJLdqi64f237XwXDzOvR4Jz54pHb1cmqzeDim8prKtWNiX2r1XXU4w/tNbsV8Wim/r48Cf2/kaQoxk9HN9tYlz3V6qXnx+BAdSw4xmi2aMde1Y2fnmW29k76Pz/AKZX3LsprzTT/InytbAf8pvXWhv4Siiyl7wm3Npa/mmx/TAAC2SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA05Ut3Fy5d8aLmvKDKTx7+fD+Jdcxa4eauuPf8A+DKU+ZlOPb81Gk4L9Ngw+vTqGSeJiU1V/b85aUx40VP2rZc1qunT58CjwYbZbcsdo7yuM2auKu8/lHuYeLVTUs7OTVSetFT9q2XNa/Q5MvLuy7XZY9ElpCC9mC6L6mcvLuy7e0seiS0rguEYR6L6nOS5s0RXwcX0x6+/z/CLDitzeLl+qf0Y1SXHl3kxtTWnE2Vi/gr3pr96MVH+JG41fa5OJX3Tuqi/7O8nL5anbtqe9nSguVVVcNPF+v8AUlw+TTZL++0fzKPN59TSntvP8I0AFcsE1svaMWlhZOjhNblbku58N2Xh0OXaWzpYcnOtN48nwfNwf4X9CP8AzJ/ZufDJg8LL0k5R3YOf9Yuj8enuLrBkpq6fh8s9f/Wf4U+fHfSX8fDG8esfyr5k7doYE8OxSWsqZtquXPR/hl4/r3cXP3vgl3tvhoisy4b4r8l46rLFmplpF6zvDMK7LZwrrWs7JKMF1bLjj004WLGvVKFUHKc3w1aWspP5s4NkbNljx+0Xr76aajF/1cX3PxfeeNuZqjBYdb9aek7mv2Yd0X7/AKGi0eGNBp51GXpaWY4rrYy25az5YQuXkSysi696pTl6q6RXBLyX5mgd7HX3MzWS85LzafVm5ned0z6Px1yMqX4aYr/NJv6FkIP0fr0ry7vx2Qr8oR3v9xOI23CacmlrDqx/SAAtEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPM4xnGUZcVJOLXVPg0Ui+udNt1U9FKuUoyfufP8AXUvDOPJw9nzlLJyK4t1wcpyeum7FavVLgVHEtFOqrE1naYWXD9XGmtPNG8SgcPDqhV9uzk448XrTU/atlzWvh0/gc2XmXZdm9ZwjFaVVx9mEei+v60zm5luXbvy9WuOqqh3QT0+fU5jLZ81a18LD9PrPvP8AvZpMOK1reLl7z2+3/wB9wAfpHC7Ujsarfzq5d1MLJ+bW59Tly7FblZVi5TuscX1jrw+RJbH+6o2plNfzdbUf8EHY/wA0Qy8eff7+8ss3k0mOnvMyr8Pn1OS3ttH8gAK1YA1a0a5rin0a4pgaNtJJttpJLm23okj2N9+jydtuqz7OvW0cSyvJipuuSrnvftrTVS9500bPwMafaVUxU9HpNuUmvc5Ns17LxHh48YT07Wx9rYl3Sf7K9365nVkX041U7rZaQj8ZPovE3mDHEYa31EdYjvLD6jLEZLxiny7tWdmV4dDslxm/Vqh3zkU+yc7ZzsnJynOTlKXVvvRuzMu7MulbPhFerXBcoR/j1/WnOZfiOunVX2rPlhVZL809ANpLV8lx92nHUHZs3F+1ZdUGn2dbV1vTSPFR8+BX4sc5bxSveXxEbzssuzaHj4WNW1pPc37F0nP1mjsMIyfomLHGKkUr2jo7Y7AAJXoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpyq3dj5Fa5zqsive4tI3GH3HzavNE1n1e1mYmJhRZKUZShJaOLaa8VwZjkWbaOyo5Td1Gkbn7SfCM/e+pXLabqJuu2EoSXdJc/GL70YLV6HJprTzRvHu2mk1mPU1jadp9ngw/y4r3riZMxjOcowhFynNqMIr9qXcjhiOadodsztG8piP3Gw5P9rJt4ec9F8okN0+PkTm165UYWzsdcYV6Rk+soQUU37+JBllxGJreuOfSIV3D5i1LZI9ZkASbaik3J8Ekm230SXEksXY2Zfuyt1or797TtGvBd3mcmDT5c88uOHXl1GPDG+SdkfCuy2ca6oynZLlGPMsmzdlQxd26/dnkaarRerXr3Lx8f0+zFwsXEju0wSb9qT4yk+rZzZu1cfF3oQ0tu4+rF+rF/vs0mm0OHRV8bUz1/SGZ1vE7Zo5adK/rLrycqjErdl0tFxUYrjKb05RRVMzNvzbN+fqwXCutPhBePj+vdqvyL8myVt096XJdyiuekV0NRVa/iVtTPJXpX92fvk36QAB9/608SoRGjeiS1baSXVvki27KwvseOt/jdbpO59H3R18P1zOHY+zWnHMyI+tprj1vnHu334vu/Wk8azhOhnH/nyR1nt8e7px026gANEmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxbVVbHdthCcXzU0mvmexxPJiLRtMPYnbrCOnsfZc3r2Lj/YssivJKWhvx8DBxXvUUxjLvk3KUvjNtnUYOeumw0nmrWIn4hLOozWjltadvmWq+ijIg67oKcHx0fXqjhWxNlp6uux8ddHbP6PU6MvJy8dN14cr46c4WJP8Ay6akLbtzNblGFVNbXDinKcX0e89PkcWszaSlv89d5+N3xXVZMMbVtMfCepxcTHX3NNcOrSWr975nPk7VwMdNdorZrhuVeto/FrgVq7MzMjVXX2ST7tdI/wCWOi+RzlVl41FY5dPTb/fZzXzzad56z90jl7Wy8rejF9jU+G5D2pJ/ikuP5EcAUebPkz25rzu57Wm3WQBcWopNtvRJcW/ckSONsfOyHFyj2Ffe7V62nhBafmv4+YsGTNO2ON3sVmeyPSk3GMU5Sk0oxinKUm+5JE/s3Y7g45GWk5rjXTwah0c5d7JDD2diYfGuDlY161s9HN+C0WiXkdpqNFwiuKefL1lPTHFessJGQC/iNo2TAAPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTdjYt6++prn0coxbXufM3A+bVraNrRuIqzYezpv1O1r/sT1X+tSNL9HsfX1cm7To1B/kkTYOK/D9NbvSHxNKz6IRej2P35N2n7qgn80/yN1ew9nR03+1sa5Oc2vlWoolQxXh+mr2pByV9minFxcf8Amaa4a83CKTfvfM3gHZWlaxtWNn3EbdgAH2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=" width={50} height={50} alt="star logo" />
              <h2><strong>KnowWhatYouEat</strong></h2>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
            {!session ? (
              <>
                <Link
                  href="/login"
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-black px-3 py-2 border border-gray-500 border-1 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="ml-10 text-sm">{session.user?.email}</span>

                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                >
                  Log out
                </button>
              </>
            )}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">KnowWhatYouEat</span>
                <Image
                  width={50}
                  height={50}
                  src="data:image/png;base64,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"
                  alt="uga logo"
                />
              </Link>
              {session ? (
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="ml-auto rounded-md bg-black border border-1 border-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log out
                </button>
              ) : (
                <Link
                  href="/register"
                  className="ml-auto rounded-md bg-black border border-1 border-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </Link>
              )}

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FaXmark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
