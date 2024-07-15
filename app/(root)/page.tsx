import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn={firstName: 'Nikhil',lastName: 'Prajapati',email: 'nikpra141107@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn.firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently.'
                />

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1000}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:2500},{currentBalance:5600}]}
        /> 
    </section>
  )
}

export default Home;