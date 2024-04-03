const castMembers = [
  {
    castSrc: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg",
    castAlt: "Marco Andrews",
    castTitle: "Marco Andrews",
  },
];

function Cast() {
  const { castSrc, castAlt, castTitle } = castMembers[0];
  return (
    <div className="castImages">
      <img src={castSrc} alt={castAlt} className="castImage" />
    </div>
  );
}

export default Cast;
