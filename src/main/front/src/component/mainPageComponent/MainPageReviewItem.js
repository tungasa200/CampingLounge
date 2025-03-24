function MainPageReviewItem(props){
    const review = props.obj;
    const url = window.location.href + '/' + review.reviewId;
    const copyUrl = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(url);
            alert('URL이 복사되었습니다!');
        } catch (err) {
            console.error('복사 실패:', err);
        }
    };

    return (
        <div className="item">
            <Link to={{ pathname: `/review/${review.reviewId}` }}>
                <div className="img-area">
                    {review.reviewImages &&
                    Array.isArray(review.reviewImages) &&
                    review.reviewImages.length > 0 &&
                    review.reviewImages[0]?.filePath ? (
                        <img src={review.reviewImages[0].filePath} alt="캠핑장 썸네일" />
                    ) : (
                        <img src="/images/review/noimage.png" alt="기본 썸네일" />
                    )}
                </div>
                <div className="txt-area">
                </div>
            </Link>
        </div>
    );
}
export default MainPageReviewItem;