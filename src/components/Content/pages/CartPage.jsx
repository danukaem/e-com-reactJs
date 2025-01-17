import React, { Suspense } from "react";

const LazyLoadComponent = React.lazy(() => import("./LazyLoad"));

function CartPage() {
  return (
    <div>
      Cart Page
      <Suspense fallback={<p>Loading...</p>}>
        <LazyLoadComponent />
      </Suspense>
    </div>
  );
}

export default CartPage;
