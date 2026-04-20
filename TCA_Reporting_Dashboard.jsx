import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";

const D={"s":{"total_active":81,"by_status":{"Open":59,"Awaiting Pump":4,"On Hold":1,"Unallocated":16},"by_category":{"Pump":23,"Overhaul":21,"Nozzle Plate":24,"Hopper":1,"Overhaul kit":1,"Other":11},"eng_complete":35,"eng_outstanding":31,"rft_this_week":2,"rft_next_4_weeks":8},"w":[{"wk":11,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":12,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":13,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":14,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":15,"cur":true,"rt":2,"ept":5,"edt":4,"eot":1},{"wk":16,"cur":false,"rt":4,"ept":3,"edt":2,"eot":1},{"wk":17,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":18,"cur":false,"rt":1,"ept":2,"edt":2,"eot":0},{"wk":19,"cur":false,"rt":0,"ept":1,"edt":1,"eot":0},{"wk":20,"cur":false,"rt":2,"ept":2,"edt":2,"eot":0},{"wk":21,"cur":false,"rt":3,"ept":1,"edt":1,"eot":0},{"wk":22,"cur":false,"rt":3,"ept":3,"edt":3,"eot":0},{"wk":23,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":24,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":25,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":26,"cur":false,"rt":2,"ept":3,"edt":2,"eot":1},{"wk":27,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":28,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":29,"cur":false,"rt":1,"ept":1,"edt":1,"eot":0},{"wk":30,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":31,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":32,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":33,"cur":false,"rt":0,"ept":0,"edt":0,"eot":0},{"wk":34,"cur":false,"rt":1,"ept":0,"edt":0,"eot":0}],"sc":{"Raw Pump Body":{"total":20,"with_plan":16},"Piston Bar Plate":{"total":23,"with_plan":23},"Hoppers":{"total":6,"with_plan":6},"Piston Bar Anodizing":{"total":21,"with_plan":21},"Pump Drive Materials":{"total":7,"with_plan":7},"Sand Blasting Pump Drive":{"total":7,"with_plan":7},"Valve Bar Plate/PB1 Nozzle Plate":{"total":59,"with_plan":59},"Pistons":{"total":30,"with_plan":30},"Sleeves":{"total":33,"with_plan":31},"Outsource Processes Start":{"total":14,"with_plan":14},"Outsource Processes End":{"total":14,"with_plan":14},"Base & Top Plate":{"total":14,"with_plan":14},"Machining Pump Body":{"total":12,"with_plan":12},"Nozzles":{"total":21,"with_plan":21}},"p":[{"w":"3118","c":"Northeast Alternatives","cat":"Pump","st":"Open","sz":400,"rpw":21,"rjw":21,"es":"Complete","d":0,"sc":11},{"w":"3118","c":"Northeast Alternatives","cat":"Pump","st":"Open","sz":400,"rpw":22,"rjw":22,"es":"Complete","d":0,"sc":11},{"w":"3154","c":"Best Formulation","cat":"Pump","st":"Open","sz":400,"rpw":23,"rjw":23,"es":"complete","d":0,"sc":6},{"w":"3111","c":"Just Born","cat":"Pump","st":"Open","sz":1200,"rpw":15,"rjw":27,"es":"Started","d":12,"sc":13},{"w":"3182","c":"Gummi World","cat":"Pump","st":"Open","sz":800,"rpw":25,"rjw":28,"es":"Complete","d":3,"sc":8},{"w":"3182","c":"Gummi World","cat":"Pump","st":"Open","sz":800,"rpw":27,"rjw":29,"es":"Complete","d":2,"sc":8},{"w":"3184","c":"Albanese","cat":"Pump","st":"Open","sz":800,"rpw":28,"rjw":34,"es":"Complete","d":6,"sc":10},{"w":"3184","c":"Albanese","cat":"Pump","st":"Open","sz":800,"rpw":29,"rjw":35,"es":"Complete","d":6,"sc":10},{"w":"3152","c":"CBM, Kabaya","cat":"Overhaul","st":"Open","sz":800,"rpw":24,"rjw":16,"es":"Complete","d":-8,"sc":3},{"w":"3152","c":"CBM, Kabaya","cat":"Overhaul","st":"Open","sz":800,"rpw":26,"rjw":17,"es":"Complete","d":-9,"sc":3},{"w":"3017","c":"Mister Sweet","cat":"Overhaul","st":"Open","sz":800,"rpw":18,"rjw":20,"es":"Complete","d":2,"sc":4},{"w":"3017","c":"Mister Sweet","cat":"Overhaul","st":"Open","sz":800,"rpw":16,"rjw":21,"es":"Complete","d":5,"sc":2},{"w":"3087","c":"MFF","cat":"Overhaul","st":"Open","sz":800,"rpw":17,"rjw":21,"es":"Complete","d":4,"sc":5},{"w":"3087","c":"MFF","cat":"Overhaul","st":"Open","sz":1200,"rpw":20,"rjw":22,"es":"Complete","d":2,"sc":5},{"w":"3087","c":"MFF","cat":"Overhaul","st":"Open","sz":800,"rpw":19,"rjw":24,"es":"Complete","d":5,"sc":5},{"w":"3087","c":"MFF","cat":"Overhaul","st":"Open","sz":1200,"rpw":22,"rjw":25,"es":"Complete","d":3,"sc":5},{"w":"3264","c":"Ferarra","cat":"Nozzle Plate","st":"Open","sz":800,"rpw":15,"rjw":15,"es":"Complete","d":0,"sc":2},{"w":"3228","c":"Albanese","cat":"Nozzle Plate","st":"Open","sz":800,"rpw":15,"rjw":16,"es":"Complete","d":1,"sc":2},{"w":"2987","c":"Bubs","cat":"Nozzle Plate","st":"Open","sz":1200,"rpw":18,"rjw":18,"es":"Complete","d":0,"sc":2},{"w":"3192","c":"Tanis Americas","cat":"Overhaul kit","st":"Open","sz":400,"rpw":20,"rjw":20,"es":"Complete","d":0,"sc":2},{"w":"3241","c":"Albanese","cat":"Other","st":"Open","sz":800,"rpw":14,"rjw":14,"es":"Complete","d":0,"sc":2},{"w":"3264","c":"Ferarra","cat":"Other","st":"Open","sz":800,"rpw":15,"rjw":15,"es":"Complete","d":0,"sc":2}],"cw":15};

const CATS = ["Pump","Overhaul","Nozzle Plate","Overhaul kit","Other","Hopper"];
const CAT_COLORS = {"Pump":"#e93d82","Overhaul":"#7c4dff","Nozzle Plate":"#378ADD","Overhaul kit":"#1D9E75","Other":"#BA7517","Hopper":"#888780"};
const STATUS_COLORS = {"Open":"#30a46c","Awaiting Pump":"#f59e0b","On Hold":"#ef4444","Unallocated":"#808080"};

function Metric({label, value, color}) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center">
      <div className="text-2xl font-medium" style={{color: color||'inherit'}}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function TabButton({active, onClick, children}) {
  return (
    <button onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${active ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  const [tab, setTab] = useState("executive");
  const s = D.s;
  const cw = D.cw;

  const weeklyFiltered = useMemo(() => D.w.filter(w => w.rt > 0 || w.ept > 0 || w.eot > 0), []);
  
  const statusData = useMemo(() => 
    Object.entries(s.by_status).filter(([k])=>k!=='null').map(([name, value]) => ({name, value, fill: STATUS_COLORS[name]||'#888'}))
  , [s]);
  
  const catData = useMemo(() => 
    Object.entries(s.by_category).map(([name, value]) => ({name, value, fill: CAT_COLORS[name]||'#888'}))
  , [s]);

  const scheduled = useMemo(() => 
    D.p.filter(p => p.rjw && p.rjw > 0 && p.st === 'Open').sort((a,b) => a.rjw - b.rjw)
  , []);

  const slipped = useMemo(() => 
    D.p.filter(p => p.d && p.d > 0 && p.st === 'Open').sort((a,b) => b.d - a.d)
  , []);

  const engOutstanding = useMemo(() => 
    D.p.filter(p => p.es && !['Complete','complete'].includes(p.es) && p.st === 'Open')
  , []);

  const scEntries = useMemo(() => 
    Object.entries(D.sc).filter(([k]) => !k.startsWith('Outsource')).map(([name, v]) => ({
      name: name.length > 20 ? name.substring(0,18)+'...' : name,
      fullName: name,
      total: v.total,
      planned: v.with_plan,
      outstanding: v.total - v.with_plan,
    }))
  , []);

  const outsource = useMemo(() => {
    const items = ["Pistons","Sleeves","Nozzles"];
    return items.map(n => ({name: n, ...D.sc[n]}));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-1 mb-4 bg-gray-50 p-1 rounded-lg w-fit">
        <TabButton active={tab==="executive"} onClick={()=>setTab("executive")}>Executive</TabButton>
        <TabButton active={tab==="engineering"} onClick={()=>setTab("engineering")}>Engineering</TabButton>
        <TabButton active={tab==="supplychain"} onClick={()=>setTab("supplychain")}>Supply chain</TabButton>
        <TabButton active={tab==="production"} onClick={()=>setTab("production")}>Production</TabButton>
        <TabButton active={tab==="slippage"} onClick={()=>setTab("slippage")}>Slippage</TabButton>
      </div>

      {tab === "executive" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Metric label="Active projects" value={s.total_active} />
            <Metric label="RFT this week" value={s.rft_this_week} color="#e93d82" />
            <Metric label="RFT next 4 weeks" value={s.rft_next_4_weeks} color="#378ADD" />
            <Metric label="Engineering outstanding" value={s.eng_outstanding} color="#f59e0b" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-600 mb-2">Projects by status</div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart><Pie data={statusData} dataKey="value" cx="50%" cy="50%" outerRadius={70} label={({name,value})=>`${name} (${value})`} fontSize={11}>
                  {statusData.map((e,i)=><Cell key={i} fill={e.fill}/>)}
                </Pie></PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600 mb-2">Projects by category</div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={catData} layout="vertical" margin={{left:80,right:20,top:5,bottom:5}}>
                  <XAxis type="number" fontSize={11}/><YAxis type="category" dataKey="name" fontSize={11} width={75}/>
                  <Bar dataKey="value" radius={[0,4,4,0]}>{catData.map((e,i)=><Cell key={i} fill={e.fill}/>)}</Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">RFT by week (current week: {cw})</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyFiltered} margin={{left:0,right:10,top:5,bottom:5}}>
                <XAxis dataKey="wk" fontSize={11} tickFormatter={v=>`W${v}`}/>
                <YAxis fontSize={11} allowDecimals={false}/>
                <Tooltip formatter={(v,n)=>[v, n==='rt'?'RFT count':n]} labelFormatter={v=>`Week ${v}`}/>
                <Bar dataKey="rt" fill="#e93d82" radius={[4,4,0,0]} name="RFT">
                  {weeklyFiltered.map((e,i)=><Cell key={i} fill={e.cur ? '#e93d82' : '#F09595'}/>)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">RFT schedule — next 8 weeks</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="border-b border-gray-200">
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">WO</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Customer</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Category</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Size</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Plan wk</th>
                  <th className="text-center py-1.5 font-medium text-gray-500">Proj wk</th>
                </tr></thead>
                <tbody>
                  {scheduled.filter(p => p.rjw <= cw + 8).map((p,i) => (
                    <tr key={i} className={`border-b border-gray-100 ${p.rjw <= cw ? 'bg-red-50' : p.rjw <= cw+1 ? 'bg-amber-50' : ''}`}>
                      <td className="py-1.5 pr-2 font-mono">{p.w}</td>
                      <td className="py-1.5 pr-2">{(p.c||'').substring(0,25)}</td>
                      <td className="py-1.5 pr-2"><span className="px-1.5 py-0.5 rounded text-white" style={{background:CAT_COLORS[p.cat]||'#888',fontSize:'10px'}}>{p.cat}</span></td>
                      <td className="py-1.5 pr-2 text-center">{p.sz}</td>
                      <td className="py-1.5 pr-2 text-center">{p.rpw||'—'}</td>
                      <td className="py-1.5 text-center font-medium">{p.rjw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "engineering" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Metric label="Engineering complete" value={s.eng_complete} color="#1D9E75" />
            <Metric label="Engineering outstanding" value={s.eng_outstanding} color="#f59e0b" />
            <Metric label="Completion rate" value={`${Math.round(s.eng_complete/(s.eng_complete+s.eng_outstanding)*100)}%`} color="#378ADD" />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">Engineering planned vs complete by week</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyFiltered} margin={{left:0,right:10,top:5,bottom:5}}>
                <XAxis dataKey="wk" fontSize={11} tickFormatter={v=>`W${v}`}/>
                <YAxis fontSize={11} allowDecimals={false}/>
                <Tooltip labelFormatter={v=>`Week ${v}`}/>
                <Bar dataKey="ept" fill="#B5D4F4" name="Planned" radius={[4,4,0,0]}/>
                <Bar dataKey="edt" fill="#1D9E75" name="Complete" radius={[4,4,0,0]}/>
                <Bar dataKey="eot" fill="#f59e0b" name="Outstanding" radius={[4,4,0,0]}/>
                <Legend fontSize={11}/>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">Engineering outstanding — {engOutstanding.length} projects</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="border-b border-gray-200">
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">WO</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Customer</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Category</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Eng status</th>
                  <th className="text-center py-1.5 font-medium text-gray-500">RFT wk</th>
                </tr></thead>
                <tbody>
                  {engOutstanding.map((p,i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-1.5 pr-2 font-mono">{p.w}</td>
                      <td className="py-1.5 pr-2">{(p.c||'—').substring(0,25)}</td>
                      <td className="py-1.5 pr-2"><span className="px-1.5 py-0.5 rounded text-white" style={{background:CAT_COLORS[p.cat]||'#888',fontSize:'10px'}}>{p.cat}</span></td>
                      <td className="py-1.5 pr-2"><span className={`px-1.5 py-0.5 rounded text-xs ${p.es==='Started'?'bg-blue-100 text-blue-800':'bg-amber-100 text-amber-800'}`}>{p.es}</span></td>
                      <td className="py-1.5 text-center">{p.rpw||'—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "supplychain" && (
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">Supply chain components — total required</div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={scEntries} layout="vertical" margin={{left:120,right:20,top:5,bottom:5}}>
                <XAxis type="number" fontSize={11}/>
                <YAxis type="category" dataKey="name" fontSize={11} width={115}/>
                <Tooltip content={({active,payload})=>{
                  if(!active||!payload||!payload[0]) return null;
                  const d=payload[0].payload;
                  return <div className="bg-white border border-gray-200 rounded p-2 text-xs shadow-sm">
                    <div className="font-medium">{d.fullName}</div>
                    <div>Total: {d.total}</div><div>With plan: {d.planned}</div>
                  </div>;
                }}/>
                <Bar dataKey="total" fill="#378ADD" radius={[0,4,4,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-600 mb-2">Outsourcing (Millers supply)</div>
              <div className="space-y-2">
                {outsource.map(o => (
                  <div key={o.name} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-sm font-medium">{o.name}</span>
                    <div className="flex gap-3 text-xs">
                      <span className="text-gray-500">Required: <span className="font-medium text-gray-900">{o.total}</span></span>
                      <span className="text-gray-500">Planned: <span className="font-medium text-gray-900">{o.with_plan}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-600 mb-2">PB1 / valve bar plates by size</div>
              <div className="space-y-2">
                {[{sz:'400',cap:6},{sz:'800',cap:6},{sz:'1200',cap:4}].map(s => {
                  const count = D.p.filter(p=>p.cat==='Nozzle Plate'&&p.sz===parseInt(s.sz)&&p.st==='Open').length;
                  return (
                    <div key={s.sz} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium">Size {s.sz}</span>
                      <div className="flex gap-3 text-xs">
                        <span className="text-gray-500">Required: <span className="font-medium text-gray-900">{count}</span></span>
                        <span className="text-gray-500">Capacity/wk: <span className="font-medium text-gray-900">{s.cap}</span></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "production" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Metric label="RFT this week" value={s.rft_this_week} color="#e93d82" />
            <Metric label="RFT next 4 wks" value={s.rft_next_4_weeks} color="#378ADD" />
            <Metric label="Pumps" value={s.by_category.Pump} />
            <Metric label="Overhauls" value={s.by_category.Overhaul} />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">Production load — RFT by week</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyFiltered} margin={{left:0,right:10,top:5,bottom:5}}>
                <XAxis dataKey="wk" fontSize={11} tickFormatter={v=>`W${v}`}/>
                <YAxis fontSize={11} allowDecimals={false}/>
                <Tooltip labelFormatter={v=>`Week ${v}`}/>
                <Bar dataKey="rt" fill="#7c4dff" name="RFT count" radius={[4,4,0,0]}>
                  {weeklyFiltered.map((e,i)=><Cell key={i} fill={e.cur?'#7c4dff':'#CECBF6'}/>)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">4-week shipping forecast (weeks {cw}–{cw+3})</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="border-b border-gray-200">
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">WO</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Customer</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Category</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Size</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Eng</th>
                  <th className="text-center py-1.5 font-medium text-gray-500">RFT wk</th>
                </tr></thead>
                <tbody>
                  {scheduled.filter(p => p.rjw >= cw && p.rjw <= cw+3).map((p,i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-1.5 pr-2 font-mono">{p.w}</td>
                      <td className="py-1.5 pr-2">{(p.c||'').substring(0,25)}</td>
                      <td className="py-1.5 pr-2"><span className="px-1.5 py-0.5 rounded text-white" style={{background:CAT_COLORS[p.cat]||'#888',fontSize:'10px'}}>{p.cat}</span></td>
                      <td className="py-1.5 pr-2 text-center">{p.sz}</td>
                      <td className="py-1.5 pr-2 text-center"><span className={`px-1.5 py-0.5 rounded text-xs ${['Complete','complete'].includes(p.es)?'bg-green-100 text-green-800':'bg-amber-100 text-amber-800'}`}>{p.es||'—'}</span></td>
                      <td className="py-1.5 text-center font-medium">{p.rjw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "slippage" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Metric label="Projects slipping" value={slipped.length} color="#ef4444" />
            <Metric label="Avg slip (days)" value={slipped.length ? Math.round(slipped.reduce((a,b)=>a+b.d,0)/slipped.length) : 0} color="#f59e0b" />
            <Metric label="Max slip (days)" value={slipped.length ? Math.max(...slipped.map(p=>p.d)) : 0} color="#ef4444" />
          </div>

          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">Slipped projects (projected RFT later than planned)</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead><tr className="border-b border-gray-200">
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">WO</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Customer</th>
                  <th className="text-left py-1.5 pr-2 font-medium text-gray-500">Category</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Plan wk</th>
                  <th className="text-center py-1.5 pr-2 font-medium text-gray-500">Proj wk</th>
                  <th className="text-center py-1.5 font-medium text-gray-500">Delay (wks)</th>
                </tr></thead>
                <tbody>
                  {slipped.map((p,i) => (
                    <tr key={i} className={`border-b border-gray-100 ${p.d >= 4 ? 'bg-red-50' : p.d >= 2 ? 'bg-amber-50' : ''}`}>
                      <td className="py-1.5 pr-2 font-mono">{p.w}</td>
                      <td className="py-1.5 pr-2">{(p.c||'').substring(0,25)}</td>
                      <td className="py-1.5 pr-2"><span className="px-1.5 py-0.5 rounded text-white" style={{background:CAT_COLORS[p.cat]||'#888',fontSize:'10px'}}>{p.cat}</span></td>
                      <td className="py-1.5 pr-2 text-center">{p.rpw}</td>
                      <td className="py-1.5 pr-2 text-center font-medium">{p.rjw}</td>
                      <td className="py-1.5 text-center"><span className={`px-2 py-0.5 rounded font-medium ${p.d>=4?'bg-red-100 text-red-800':'bg-amber-100 text-amber-800'}`}>+{p.d}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 pt-3 border-t border-gray-100 text-xs text-gray-400">
        Data from All_Projects_Data.xlsm — {D.p.length} active projects — Current week: {cw}
      </div>
    </div>
  );
}
