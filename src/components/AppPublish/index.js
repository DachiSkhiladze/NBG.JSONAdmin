import React from "react";
import useFiles, { AppLoader } from "../../hooks/useFiles";

export default function AppPublish() {
  const files = useFiles();
  return (
    <div>
      <div>
        {files?.map((x) => (
          <AppPublishListItem key={x.name} {...x} />
        ))}
      </div>
      <AppLoader />
    </div>
  );
}

function AppPublishListItem({
  publish,
  reset,
  loading,
  name,
  version,
  canPublish,
}) {
  return (
    <div mt={2}>
      <h1>
        {name} {version}
      </h1>
      <button disabled={loading || !canPublish} onClick={publish}>
        {loading ? <p size={20}>loading</p> : <span>PUBLISH</span>}
      </button>
    </div>
  );
}
