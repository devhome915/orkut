import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { FriendsList } from "../components/FriendsList/FriendsList";
import { CommunitiesList } from "../components/CommunitiesList/CommunitiesList";

import { currentUser, friends } from "../data/users";
import { communities } from "../data/communities";


function Home(){

    return(
        <div className="row g-3">

            <div className="col-12 col-lg-3">
                <ProfileCard user={currentUser}/>
            </div>

            <div className="col-12 col-lg-6">
                <section className="bg-white rounded p-4 h-100">

                    <p>
                        Essa é sua página inicial do orkut
                    </p>
                </section>
            </div>

            <div className="col-12 col-lg-3">
                <div className="d-flex flex-column gap-3">
                    <FriendsList friends={friends}/>
                    <CommunitiesList communities={communities}/>
                </div>
            </div>
        </div>
    )
}

export default Home