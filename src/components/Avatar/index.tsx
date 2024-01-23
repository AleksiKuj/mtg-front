type Size = 'small' | 'medium' | 'large'

type AvatarProps = {
  size?: Size
  src?: string
  alt?: string
}

const EmptyAvatar = ({ size = 'medium' }: Pick<AvatarProps, 'size'>) => (
  <span
    data-testid="empty-avatar"
    className={`inline-block overflow-hidden rounded-full bg-gray-100`}
  >
    <svg
      className="h-full w-full text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </span>
)

const Avatar = ({ size = 'medium', src, alt }: AvatarProps) => {
  if (!src) {
    return <EmptyAvatar size={size} />
  }

  return <img className={'inline-block rounded-full'} src={src} alt={alt} />
}
export default Avatar
