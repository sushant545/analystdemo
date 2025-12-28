import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft, CheckCircle2, Lock, FileText, Download,
    Upload, ChevronRight, AlertCircle, Play
} from 'lucide-react';
import { projects } from '../data/mockProjects';

const StepIcon = ({ status, number }) => {
    if (status === 'completed') return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    if (status === 'locked') return <div className="w-6 h-6 rounded-full border-2 border-brand-slate/30 flex items-center justify-center text-xs text-brand-slate"><Lock className="w-3 h-3" /></div>;
    return <div className="w-6 h-6 rounded-full bg-brand-blue text-brand-navy font-bold flex items-center justify-center text-xs">{number}</div>;
};

const ProjectWorkspace = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    // Mock State for Progression
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [quizAnswer, setQuizAnswer] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    if (!project) return <div className="p-12 text-center">Project not found.</div>;

    // Render Logic
    const handleNext = () => {
        setCompletedSteps([...completedSteps, currentStep]);
        setCurrentStep(prev => prev + 1);
    };

    const handleQuizSubmit = () => {
        if (quizAnswer.toLowerCase().includes('882')) {
            handleNext();
        } else {
            alert("Incorrect. Hint: Check rows 880-890.");
        }
    };

    const handleFinish = () => {
        setIsSuccess(true);
    };

    return (
        <div className="flex h-[calc(100vh-140px)] gap-6">

            {/* Left Sidebar: Stepper */}
            <div className="w-80 bg-brand-navy border border-white/10 rounded-2xl p-6 flex flex-col">
                <Link to="/app/projects" className="flex items-center gap-2 text-brand-slate hover:text-brand-light mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Catalog
                </Link>

                <div className="mb-8">
                    <span className="text-xs uppercase font-bold text-brand-slate opacity-50 tracking-wider">Project</span>
                    <h2 className="text-lg font-bold text-brand-light leading-tight mt-1">{project.title}</h2>
                </div>

                <div className="space-y-6 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-white/5 -z-10" />

                    {project.steps.map((step, index) => {
                        const stepNum = index + 1;
                        const status = completedSteps.includes(stepNum) ? 'completed' : (currentStep === stepNum ? 'active' : 'locked');

                        return (
                            <div key={step.id} className={`flex items-start gap-4 ${status === 'locked' ? 'opacity-50' : 'opacity-100'}`}>
                                <div className="pt-0.5 bg-brand-navy z-10">
                                    <StepIcon status={status} number={stepNum} />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold ${status === 'active' ? 'text-brand-blue' : 'text-brand-light'}`}>{step.title}</h4>
                                    <p className="text-xs text-brand-slate mt-0.5">Step {stepNum}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Content: Workspace */}
            <div className="flex-1 bg-brand-navy border border-white/10 rounded-2xl p-8 overflow-y-auto relative">

                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                    <div>
                        <h1 className="text-2xl font-bold text-brand-light">
                            {project.steps[currentStep - 1]?.title}
                        </h1>
                        <p className="text-brand-slate">Phase {currentStep} of {project.steps.length}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-brand-slate">Environment Active</span>
                    </div>
                </div>

                {/* Step 1: The Brief */}
                {currentStep === 1 && (
                    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-brand-blue/10 border border-brand-blue/20 p-6 rounded-xl">
                            <h3 className="text-brand-blue font-bold mb-2 flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" /> Mission Brief
                            </h3>
                            <p className="text-brand-slate leading-relaxed">
                                {project.steps[0].content.scenario}
                            </p>
                        </div>

                        <div className="prose prose-invert prose-sm">
                            <h3>Your Role</h3>
                            <p>{project.steps[0].content.roleDescription}</p>
                            <h3>Deliverable</h3>
                            <p>{project.steps[0].content.deliverable}</p>
                        </div>

                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-brand-blue hover:bg-brand-blue/90 text-brand-navy font-bold rounded-xl flex items-center gap-2 transition-all hover:scale-105"
                        >
                            Accept Mission <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Step 2: Discovery */}
                {currentStep === 2 && (
                    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div>
                            <h3 className="text-lg font-bold text-brand-light mb-4">1. Access Resources</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors flex items-center gap-4">
                                    <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-brand-light group-hover:text-green-400 transition-colors">shipping_logs.csv</p>
                                        <p className="text-xs text-brand-slate">4.2 MB • CSV</p>
                                    </div>
                                    <Download className="w-4 h-4 text-brand-slate group-hover:text-brand-light" />
                                </div>
                                <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors flex items-center gap-4">
                                    <div className="p-2 bg-red-500/20 text-red-500 rounded-lg">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-brand-light group-hover:text-red-400 transition-colors">warehouse_codes.pdf</p>
                                        <p className="text-xs text-brand-slate">1.1 MB • PDF</p>
                                    </div>
                                    <Download className="w-4 h-4 text-brand-slate group-hover:text-brand-light" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-brand-dark rounded-xl border border-white/5">
                            <h3 className="text-lg font-bold text-brand-light mb-4">2. Checkpoint Quiz</h3>
                            <p className="text-brand-slate mb-4 text-sm">To verify you've inspected the data, answer this question:</p>

                            <div className="space-y-4">
                                <p className="font-medium text-brand-light">Which column in the dataset contains NULL values for 'delivery_date'?</p>
                                <input
                                    type="text"
                                    value={quizAnswer}
                                    onChange={(e) => setQuizAnswer(e.target.value)}
                                    placeholder="Enter the Shipment ID..."
                                    className="w-full bg-brand-navy border border-white/10 rounded-lg px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all placeholder:text-brand-slate/30"
                                />
                                <button
                                    onClick={handleQuizSubmit}
                                    className="px-6 py-2 bg-brand-teal text-brand-navy font-bold rounded-lg hover:bg-brand-teal/90 transition-colors"
                                >
                                    Submit Checkpoint
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Submission */}
                {currentStep === 3 && !isSuccess && (
                    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all cursor-pointer group">
                            <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <Upload className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-2">Upload Deliverable</h3>
                            <p className="text-brand-slate mb-6 max-w-sm mx-auto">
                                Drag and drop your final Python script or SQL query here. Supported formats: .sql, .py, .ipynb
                            </p>
                            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-brand-light font-medium rounded-lg transition-colors">
                                Select File
                            </button>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleFinish}
                                className="px-8 py-3 bg-green-500 hover:bg-green-400 text-brand-navy font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-green-500/20"
                            >
                                Complete Project <CheckCircle2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Success State */}
                {isSuccess && (
                    <div className="absolute inset-0 bg-brand-navy/95 backdrop-blur-sm z-50 flex items-center justify-center">
                        <div className="bg-brand-dark border border-white/10 p-8 rounded-2xl max-w-md w-full text-center animate-in zoom-in-95 duration-300 shadow-2xl">
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-brand-light mb-2">Mission Complete!</h2>
                            <p className="text-brand-slate mb-6">
                                You've successfully analyzed the logistics bottleneck. Great work on identifying the null delivery dates.
                            </p>

                            <div className="bg-brand-navy p-4 rounded-xl mb-6">
                                <p className="text-xs text-brand-slate uppercase tracking-wider mb-1">Rewards</p>
                                <p className="text-2xl font-bold text-brand-blue flex items-center justify-center gap-2">
                                    +500 XP <span className="text-sm font-normal text-brand-slate/50">(Level Up!)</span>
                                </p>
                            </div>

                            <Link to="/app/projects" className="block w-full py-3 bg-brand-blue text-brand-navy font-bold rounded-xl hover:bg-brand-blue/90 transition-colors">
                                Return to Catalog
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectWorkspace;
