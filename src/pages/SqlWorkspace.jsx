import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Database, CheckCircle, AlertCircle, Layout } from 'lucide-react';
import Editor from "@monaco-editor/react";
import { sqlProblems } from '../data/mockData';

const SqlWorkspace = () => {
    const { id } = useParams();
    const problem = sqlProblems.find(p => p.id === parseInt(id));

    const [code, setCode] = useState("-- Write your query here\nSELECT * FROM table_name;");
    const [isRunning, setIsRunning] = useState(false);
    const [result, setResult] = useState(null); // { status: 'success' | 'error', message: string, data?: array }

    // Reset state when problem changes
    useEffect(() => {
        setCode(`-- ${problem?.title}\n-- Expected Schema: ${problem?.expectedSchema}\n\nSELECT * FROM orders LIMIT 10;`);
        setResult(null);
    }, [id, problem]);

    const handleRun = () => {
        setIsRunning(true);
        setResult(null);

        // Mock Execution Logic
        setTimeout(() => {
            setIsRunning(false);

            if (!code || code.trim().length < 10) {
                setResult({ status: 'error', message: 'Query cannot be empty.' });
                return;
            }

            if (code.includes('fail')) {
                setResult({ status: 'error', message: 'Syntax Error: Unexpected token near line 1.' });
                return;
            }

            // Simulation of success
            setResult({
                status: 'success',
                message: 'Query executed successfully in 0.45s',
                data: [
                    { id: 101, region: 'North', sales: 4500 },
                    { id: 102, region: 'South', sales: 3200 },
                    { id: 103, region: 'East', sales: 5100 },
                    { id: 104, region: 'West', sales: 2900 },
                ]
            });
        }, 1000);
    };

    if (!problem) return <div className="p-8 text-brand-light">Problem not found.</div>;

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-4">

            {/* Pane A: Problem Description */}
            <div className="w-full lg:w-1/3 bg-brand-navy border border-white/10 rounded-xl overflow-y-auto flex flex-col">
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between sticky top-0 backdrop-blur-md z-10">
                    <Link to="/app/sql-gym" className="text-brand-slate hover:text-brand-light transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                            {problem.difficulty}
                        </span>
                        <span className="text-xs text-brand-slate">{problem.status}</span>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold text-brand-light mb-4">{problem.title}</h1>
                        <p className="text-brand-slate leading-relaxed">{problem.description}</p>
                    </div>

                    <div className="bg-brand-dark rounded-lg p-4 border border-white/5">
                        <h3 className="text-sm font-bold text-brand-light mb-2 flex items-center gap-2">
                            <Database className="w-4 h-4 text-brand-teal" /> Schema
                        </h3>
                        <code className="text-xs font-mono text-brand-teal block">
                            {problem.expectedSchema}
                        </code>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-brand-light">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {problem.tags.map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-brand-slate">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Editor & Console */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">

                {/* Pane B: Editor */}
                <div className="flex-1 bg-brand-navy border border-white/10 rounded-xl overflow-hidden flex flex-col relative">
                    <div className="h-10 border-b border-white/10 bg-brand-dark flex items-center justify-between px-4">
                        <span className="text-xs font-mono text-brand-slate">query.sql</span>
                        <button
                            onClick={handleRun}
                            disabled={isRunning}
                            className="flex items-center gap-2 px-3 py-1 bg-brand-teal hover:bg-brand-teal/90 text-brand-navy text-xs font-bold rounded transition-colors disabled:opacity-50 disabled:cursor-wait"
                        >
                            {isRunning ? 'Running...' : <><Play className="w-3 h-3 fill-current" /> Run Logic</>}
                        </button>
                    </div>
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            defaultLanguage="sql"
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value)}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                padding: { top: 16 },
                                fontFamily: 'JetBrains Mono, monospace',
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </div>
                </div>

                {/* Pane C: Results Console */}
                <div className={`bg-brand-navy border border-white/10 rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${result ? 'h-64' : 'h-12'}`}>
                    <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between" onClick={() => !result && setResult({ status: 'none' })}> {/* Collapsible logic mock */}
                        <div className="flex items-center gap-4">
                            <button className="text-xs font-bold text-brand-light border-b-2 border-brand-teal pb-3 translate-y-3.5">Output</button>
                            <button className="text-xs font-medium text-brand-slate hover:text-brand-light pb-3 translate-y-3.5">Test Cases</button>
                        </div>
                        {result && (
                            <div className={`flex items-center gap-2 text-xs font-bold ${result.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {result.status === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                {result.message}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 overflow-auto p-0">
                        {result?.status === 'success' && result.data && (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-brand-dark text-xs sticky top-0 text-brand-slate">
                                    <tr>
                                        {Object.keys(result.data[0]).map(key => (
                                            <th key={key} className="p-3 font-mono border-b border-white/5">{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-mono text-brand-light">
                                    {result.data.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                                            {Object.values(row).map((val, idx) => (
                                                <td key={idx} className="p-3">{val}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {result?.status === 'error' && (
                            <div className="p-4 text-red-400 font-mono text-sm bg-red-500/5 h-full">
                                {result.message}
                            </div>
                        )}

                        {!result && (
                            <div className="p-4 text-brand-slate/50 text-sm flex items-center justify-center h-full">
                                Run the query to see results
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SqlWorkspace;
