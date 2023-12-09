import { Outlet, Params, useParams } from "react-router-dom";
import { PublicNavbar } from "../../components/PublicNavbar";


const PublicLayout = () => {
  const { tel } = useParams<Params>();
  return (
    <>
      <div>
        <PublicNavbar tel={tel!} />
        <Outlet />
      </div>
    </>
  )
}
export default PublicLayout