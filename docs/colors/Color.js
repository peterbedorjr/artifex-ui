export const Color = (props) => {
  const { name, textColor, value } = props.color;

  return (
    <div
      key={name}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        height: 128,
        width: 128,
        padding: '1rem',
        backgroundColor: value,
        cursor: 'pointer',
      }}
    >
      <div style={{ color: textColor, fontSize: '0.875rem' }}>
        {isCopying ? 'Copied!' : 'test'}
      </div>
      <div style={{ color: textColor, fontSize: '0.875rem' }}>{value}</div>
    </div>
  );
};
