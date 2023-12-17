export const UserCard = ({userName}: {userName: string}) => {
  return (
    <div style={{
        width: '300px',
        height: '100px',
        border: '1px solid gray',
        borderRadius: '8px',
        textAlign: 'center',
        lineHeight: '100px'
    }}>
        USER: {userName ?? 'user'}
    </div>
  );
};

