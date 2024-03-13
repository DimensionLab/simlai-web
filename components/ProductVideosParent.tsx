import ShowcaseCard from "./ShowcaseCard";

const txtDataModelEngineer = [
  [
    "Datasets management",
    "Construct large datasets from classical simulation exports or physical sensors that collect precise measurements from real-world experiments.",
  ],
  [
    "Building blocks",
    "Quickly develop the model architecture for the simulators&apos;s desired capabilities and physical constraints. Customizable to the bone through code editor.",
  ],
  [
    "Automated high-performance computing",
    "One-click A100 GPUs. Train and optimize learnable simulators in high-performance, GPU-powered cloud or HPC centers without dealing with the complexities of managing the cloud infrastructure.",
  ],
];

const txtDataSimulationStudio = [
  [
    "Superfast",
    "<div>Simulations are computed by inferring trained neural network models, achieving speedups of <strong>1,000-100,000x</strong> compared to classical simulation software running on GPUs.</div>",
  ],
  [
    'Interactive "in-situ" visualization',
    "The time it takes to compute one timestep even of highly irregular simulation domain is in low tens of milliseconds, resulting in real-time visualization of simulating physical phenomena.",
  ],
  [
    "Unreal rendering performance",
    "High-fidelity visualization rendering is achieved by leveraging the powerful Unreal Engine under the hood. Our 3D graphics enable a cutting-edge visual representation of data.",
  ],
];

export default function ProductVideoWrapper() {
  return(
    <div>
       <ShowcaseCard
          imgPath={"/assets/simlai/model_engineer_video.mp4"}
          title={"Model Engineer"}
          subtitle={"Train and optimize extremely fast physics simulators using deep learning techniques through web-based Model Engineer application."}
          txtData={txtDataModelEngineer}
        />
        <ShowcaseCard 
          imgPath={"/assets/simlai/simulation_studio_video.mp4"} 
          title={"Simulation Studio"} 
          subtitle={"Leverage trained AI simulator models for solving engineering and scientific problems, by constructing interactive, physics and data-driven digital twins."} 
          txtData={txtDataSimulationStudio}   
        />
    </div>
  );
}
