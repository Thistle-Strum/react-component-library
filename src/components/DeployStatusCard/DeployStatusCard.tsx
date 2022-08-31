import React, { useMemo } from 'react';

export interface DeployStatusCardProps {
  readonly deployInformation: { [key: string]: string }[];
}

export const DeployStatusCard: React.VFC<DeployStatusCardProps> = ({
  deployInformation,
}) => {
  const deployHash = deployInformation[1].deployHash;

  const truncatedDeployHash = useMemo(() => {
    const startingSlice = deployHash.slice(0, 5);
    const endingSlice = deployHash.slice(-6, -1);
    return `${startingSlice}...${endingSlice}`;
  }, [deployHash]);

  return (
    <section className="w-full max-w-3xl m-0 p-0">
      <h2 className="text-3xl mb-4">
        Deploy:{' '}
        <span className="tracking-2 font-normal">{truncatedDeployHash}</span>
      </h2>
      <div className="max-w-3xl bg-[#FFF] shadow-card rounded px-4 pb-0 overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr className="flex flex-row border-b border-[rgb(242, 243, 245)] border-solid py-2">
              <td className="text-slate-500 whitespace-nowrap w-32">
                Timestamp
              </td>
              <td>{deployInformation[0].timestamp}</td>
            </tr>
            <tr className="flex flex-row py-2">
              <td className="text-slate-500 whitespace-nowrap w-32">
                Deploy Hash
              </td>
              <td>
                {deployHash}
                &nbsp;
                <button
                  className="text-slate-500 hover:text-neutral-400 focus:text-green-400 transition-all"
                  type="button"
                  onClick={() => navigator.clipboard.writeText(deployHash)}>
                  Copy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
