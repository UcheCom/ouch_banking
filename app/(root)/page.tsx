import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { get } from 'http';

/**
 * The main landing page of the app, which displays a greeting and basic
 * information to the user.
 * 
 * @returns The main landing page of the app.
 */
const Home = async () => {
    const loggedIn = await getLoggedInUser();
    
    return (
        <section className="home">
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="A modern banking app for the century"
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={2000.45}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={loggedIn}
                transactions={[]}
        banks={[{ currentBalance: 600.50 }, { currentBalance: 800.60 }]}
            />
        </section>
    )
}

export default Home
