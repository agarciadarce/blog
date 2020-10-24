import Link from "next/link";
const PostCard = ({ value }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.body}</p>
        <Link href="/users/[id]" as={"/users/"+value.userId}>
          <a className="btn btn-primary">Ver Usuario creador del post</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
