import { CommunitiesList } from '../components/CommunitiesList/CommunitiesList'
import { communities } from '../data/communities'

function Communities() {
  return (
    <div className="row">
      <div className="col-12 col-lg-8 mx-auto">
        <CommunitiesList communities={communities} />
      </div>
    </div>
  )
}

export default Communities