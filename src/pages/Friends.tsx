import { FriendsList } from '../components/FriendsList/FriendsList'
import { friends } from '../data/users'

function Friends() {
  return (
    <div className="row">
      <div className="col-12 col-lg-8 mx-auto">
        <FriendsList friends={friends} />
      </div>
    </div>
  )
}

export default Friends