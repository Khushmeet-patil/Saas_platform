"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards, Users, Star, TrendingUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

function SideNav() {
  const [mounted, setMounted] = useState(false);
  
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: '/dashboard'
    },
    {
      name: "History",
      icon: FileClock,
      path: '/dashboard/history'
    },
  ];

  const path = usePathname();
  
  useEffect(() => {
    console.log(path);
    setMounted(true);
  }, [path]); // Add dependency to avoid unnecessary re-renders

  // Usage statistics
  const usageStats = {
    activeUsers: "12.4k",
    satisfaction: "98%",
    growthRate: "+24%"
  };

  return (
    <motion.div 
      className='h-screen relative p-5 shadow-md border bg-white flex flex-col rounded-r-xl backdrop-blur-sm border-gray-200'
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: '0 4px 20px -2px rgba(160, 120, 200, 0.1)',
      }}
    >
      <motion.div 
        className='flex justify-center mb-4 overflow-hidden'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image 
          src="/logo.svg" 
          alt="logo" 
          width={100} 
          height={100}
          className="drop-shadow-md hover:drop-shadow-lg transition-all duration-300"
        />
      </motion.div>
      
      <motion.hr 
        className='border border-gray-100 mb-6'
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          background: 'linear-gradient(to right, transparent, rgba(120, 90, 200, 0.2), transparent)',
          height: '1px',
          border: 'none'
        }}
      />
      
      {/* Decorative element to fill space */}
      {mounted && (
        <motion.div 
          className="absolute top-40 -right-3 h-24 w-6 bg-purple-700 rounded-l-lg opacity-20"
          initial={{ height: 0 }}
          animate={{ height: 100 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, #8a5cf6, #6366f1)',
            boxShadow: '0 0 15px rgba(138, 92, 246, 0.3)'
          }}
        />
      )}
      
      <div className='mt-3 flex-1'>
        {MenuList.map((menu, index) => (
          <Link key={menu.path} href={menu.path} className="block">
            <motion.div
              className={`flex gap-2 mb-2 p-3
              hover:bg-purple-700 hover:text-white rounded-lg
              cursor-pointer transition-all duration-200
              ${path === menu.path ? 'bg-purple-700 text-white' : 'bg-transparent'}
              relative group
              `}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
              style={{
                boxShadow: path === menu.path ? '0 4px 12px rgba(126, 34, 206, 0.2)' : 'none',
                backdropFilter: 'blur(8px)',
                fontWeight: path === menu.path ? '600' : '400',
                letterSpacing: '0.01em'
              }}
            >
              {/* Active menu indicator */}
              {path === menu.path && (
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-full" 
                  layoutId="activeIndicator"
                  style={{
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                  }}
                />
              )}
              
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-current"
              >
                <menu.icon className='h-6 w-6' />
              </motion.div>
              <h2 className="font-medium">{menu.name}</h2>
              
              {/* Hover indicator */}
              <motion.div 
                className="absolute right-2 top-1/2 w-0 h-0 bg-white rounded-full opacity-0 group-hover:opacity-60 -translate-y-1/2"
                whileHover={{ 
                  width: 5, 
                  height: 5,
                  opacity: 0.6,
                  transition: { duration: 0.2 }
                }}
                style={{
                  boxShadow: '0 0 5px rgba(255, 255, 255, 0.6)'
                }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
      
      {/* Usage Statistics Section */}
      <motion.div
        className="mt-auto mb-4 bg-gray-50 rounded-lg p-4 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
          boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.7)',
          borderColor: 'rgba(120, 90, 200, 0.1)'
        }}
      >
        <motion.h3 
          className="text-sm font-medium text-gray-700 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.3 }}
          style={{
            borderBottom: '1px solid rgba(120, 90, 200, 0.1)',
            paddingBottom: '6px',
            color: '#4c1d95'
          }}
        >
          Platform Insights
        </motion.h3>
        
        <motion.div className="space-y-2">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.3 }}
            style={{
              padding: '4px 6px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            whileHover={{
              backgroundColor: 'rgba(138, 92, 246, 0.05)'
            }}
          >
            <div className="flex items-center gap-2">
              <Users size={14} className="text-purple-600" />
              <span className="text-xs text-gray-600">Active Users</span>
            </div>
            <span className="text-xs font-semibold text-gray-800">{usageStats.activeUsers}</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            style={{
              padding: '4px 6px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            whileHover={{
              backgroundColor: 'rgba(234, 179, 8, 0.05)'
            }}
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="text-yellow-500" />
              <span className="text-xs text-gray-600">Satisfaction Rate</span>
            </div>
            <span className="text-xs font-semibold text-gray-800">{usageStats.satisfaction}</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.3 }}
            style={{
              padding: '4px 6px',
              borderRadius: '6px',
              transition: 'all 0.2s ease',
            }}
            whileHover={{
              backgroundColor: 'rgba(34, 197, 94, 0.05)'
            }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-green-500" />
              <span className="text-xs text-gray-600">Monthly Growth</span>
            </div>
            <span className="text-xs font-semibold text-green-600">{usageStats.growthRate}</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-3 pt-2 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
          style={{
            borderImageSource: 'linear-gradient(to right, transparent, rgba(120, 90, 200, 0.2), transparent)',
            borderImageSlice: '1',
          }}
        >
          <span className="text-xs text-purple-600 font-medium" style={{
            background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 1px rgba(0,0,0,0.05)'
          }}>Trusted by 250+ companies</span>
        </motion.div>
      </motion.div>
      
      {/* Decorative dots */}
      {mounted && (
        <motion.div 
          className="flex justify-between w-full mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {[1, 2, 3, 4, 5].map((dot, i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 rounded-full bg-gray-200"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ 
                delay: 1.5 + i * 0.1, 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: i * 2
              }}
              style={{
                background: i % 2 === 0 ? 
                  'linear-gradient(45deg, #8b5cf6, #6366f1)' : 
                  'linear-gradient(45deg, #e879f9, #c084fc)',
                boxShadow: '0 0 8px rgba(138, 92, 246, 0.3)'
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default SideNav;