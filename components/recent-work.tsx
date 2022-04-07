import Image from 'next/image';
import Link from 'next/link';

const RecentWork = () => {
  return (
    <>
      <h2 className={'mb-2 mt-5 font-bold lg:mb-4'}>Recent Work</h2>
      <div className={'flex flex-col'}>
        <div className={'flex flex-col lg:flex-row'}>
          <WorkLink
            url={'https://www.celonis.com'}
            name={'Celonis'}
            image={'/assets/images/celonis.png'}
            dates={'2020-Present'}
            width={3334}
            height={1668}
          />
          <WorkLink
            url={'https://www.lmu.de'}
            name={'LMU Munich'}
            image={'/assets/images/celonis.png'}
            dates={'2022'}
            width={3334}
            height={1668}
          />
        </div>
        <div className={'flex flex-col lg:flex-row'}>
          <WorkLink
            url={'https://www.lmu.de'}
            name={'Aiderly'}
            image={'/assets/images/celonis.png'}
            dates={'2019'}
            width={3334}
            height={1668}
          />
          <WorkLink
            url={'https://digitalservice.bund.de/tech4germany/'}
            name={'Tech4Germany'}
            image={'/assets/images/celonis.png'}
            dates={'2018'}
            width={3334}
            height={1668}
          />
        </div>
      </div>
    </>
  );
};

type WorkLinkProps = {
  url: string;
  image: string;
  name: string;
  dates: string;
  width: number;
  height: number;
};

const WorkLink = ({ url, image, name, dates, width, height }: WorkLinkProps) => {
  return (
    <Link href={url}>
      <div className={'flex flex-row'}>
        <div className={'h-[3.75rem] w-[3.75rem]'}>
          <Image
            src={image}
            alt={`${name} icon`}
            layout={'responsive'}
            width={width}
            height={height}
          />
        </div>
        <div className={'ml-4'}>
          <p className={'mt-1.5 leading-none lg:mt-1'}>{name}</p>
          <p className={'opacity-60'}>{dates}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentWork;
